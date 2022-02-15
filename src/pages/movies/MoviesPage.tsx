import * as React from 'react';
import { Trans } from '@lingui/macro';
import { GenreFilter } from './GenreFilter';
import { GenreOption } from '../../types/GenreOption';
import { DiscoverMovie } from './DiscoverMovie';
import { FilterWrapper } from './styled';
import { DateFilter } from './DateFilter';
import { Filter } from '../../types/Filter';

export const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<GenreOption[] | null>(null);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [filter, setFilter] = React.useState<Filter | undefined>(undefined);

  const handleClick = () => {
    const genre = selectedGenre?.map((item: GenreOption) => item.value).join();
    setFilter({ genre, startDate, endDate });
  };

  return (
    <div>
      <FilterWrapper>
        <h2>
          <Trans>Filter</Trans>
        </h2>
        <span>
          <Trans>Genre</Trans>
        </span>
        <GenreFilter setSelectedGenre={setSelectedGenre} />
        <DateFilter startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <button onClick={handleClick}>
          <Trans>Apply</Trans>
        </button>
      </FilterWrapper>
      <h1>
        <Trans>Movies</Trans>
      </h1>
      <DiscoverMovie filter={filter} />
    </div>
  );
};
