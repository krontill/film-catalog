import * as React from 'react';
import { Trans } from '@lingui/macro';
import { UseFilter } from '../../hooks/Filter/useFilter';
import { DiscoverRandomMovie } from './DiscoverRandomMovie';

export const Random = () => {
  const { filterComponent, filterState } = UseFilter();

  return (
    <>
      {filterComponent}
      <h1>
        <Trans>Random movie</Trans>
      </h1>
      <DiscoverRandomMovie filter={filterState} />
    </>
  );
};
