import * as React from 'react';
import { Trans } from '@lingui/macro';
import { MovieListings } from './styled';
import { MovieList } from './MovieList';

export const Dashboard = () => (
  <>
    <h1>
      <Trans>Dashboard</Trans>
    </h1>
    <MovieListings>
      <div>
        <h3>
          <Trans>Now playing</Trans>
        </h3>
        <MovieList movieList="now_playing" />
      </div>
      <div>
        <h3>
          <Trans>Upcoming</Trans>
        </h3>
        <MovieList movieList="upcoming" />
      </div>
      <div>
        <h3>
          <Trans>Popular</Trans>
        </h3>
        <MovieList movieList="popular" />
      </div>
    </MovieListings>
  </>
);
