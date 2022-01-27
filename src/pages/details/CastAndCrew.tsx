import * as React from 'react';
import { useMovie } from '../../hooks/useMovie';
import { Trans } from '@lingui/macro';
import { CastAndCrewWrapper } from './styled';

export const CastAndCrew: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = useMovie(`/${id}/credits`);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { cast, crew } = data;

  return (
    <CastAndCrewWrapper>
      <div>
        <Trans>Cast</Trans>
        <ul>
          {cast?.map((item: { credit_id: string; name: string; character: string }) => (
            <li key={item.credit_id}>
              <Trans>Name</Trans>: {item.name} &mdash; <Trans>Character</Trans>: {item.character}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Trans>Crew</Trans>
        <ul>
          {crew?.map((item: { credit_id: string; name: string; job: string }) => (
            <li key={item.credit_id}>
              <Trans>Name</Trans>: {item.name} &mdash; <Trans>Job</Trans>: {item.job}
            </li>
          ))}
        </ul>
      </div>
    </CastAndCrewWrapper>
  );
};
