import * as React from 'react';
import { Trans } from '@lingui/macro';
import { DiscoverMovie } from './DiscoverMovie';
import { UseFilter } from '../../hooks/Filter/useFilter';

export const MoviesPage = () => {
  const { filterComponent, filterState } = UseFilter();

  return (
    <>
      {filterComponent}
      <h1>
        <Trans>Movies</Trans>
      </h1>
      <DiscoverMovie filter={filterState} />
    </>
  );
};
