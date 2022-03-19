import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useAuth } from './useAuth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth?.user) {
    return <Trans>Authorized only</Trans>;
  }

  return children;
};
