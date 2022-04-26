import * as React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';
import { getApiUrl } from '../../helpers/getApiUrl';
import { useEffect, useState } from 'react';
import { Trans } from '@lingui/macro';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';
import { Path } from '../../routes';

const guestUrl = '/authentication/guest_session/new';

export const Login = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<true | false>(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const isUpdateSessionId = sessionId === null && isLoaded;
  const url = getApiUrl(guestUrl);
  const { data, error } = useSWR(isUpdateSessionId ? url : null, fetcher);

  if (error !== undefined) {
    setIsLoaded(false);
    console.warn(error);
  }

  useEffect(() => {
    const id = data?.guest_session_id;
    if (id !== undefined) {
      setSessionId(id);
      auth?.signin({ username, id }, () => navigate(Path.lists));
    }
  }, [data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoaded(true);
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;
    setUsername(username);
  };

  const handleLogout = () => {
    auth?.signout(() => navigate(Path.dashboard));
  };

  return (
    <>
      {!auth?.user ? (
        <form onSubmit={handleSubmit}>
          <label>
            <Trans>Username</Trans>: <input name="username" type="text" />
          </label>
          <button type="submit" disabled={isLoaded}>
            <Trans>Login</Trans>
          </button>
        </form>
      ) : (
        <>
          <Trans>Welcome</Trans> {auth.user?.username}!
          <button onClick={handleLogout}>
            <Trans>Logout</Trans>
          </button>
        </>
      )}
    </>
  );
};
