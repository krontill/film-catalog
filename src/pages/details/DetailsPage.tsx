import * as React from 'react';
import { Trans } from '@lingui/macro';
import { MovieInfo } from './MovieInfo';
import { useParams } from 'react-router-dom';
import { CastAndCrew } from './CastAndCrew';
import { Recommendation } from './Recommendation';
import { NotFound } from '../404/NotFound';

export const DetailsPage = () => {
  const { id } = useParams();

  if (id === undefined) return <NotFound />;

  return (
    <div>
      <h3>
        <Trans>Movie details</Trans>
      </h3>
      <MovieInfo id={id} />
      <h3>
        <Trans>Cast and crew for a movie.</Trans>
      </h3>
      <CastAndCrew id={id} />
      <h3>
        <Trans>Recommendation</Trans>
      </h3>
      <Recommendation id={id} />
    </div>
  );
};
