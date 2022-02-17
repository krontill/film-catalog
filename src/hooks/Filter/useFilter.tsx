import * as React from 'react';
import { GenreOption } from '../../types/GenreOption';
import { Filter } from '../../types/Filter';
import { FilterWrapper } from './styled';
import { Trans } from '@lingui/macro';
import { GenreFilter } from '../../components/GenreFilter/GenreFilter';
import { DateFilter } from '../../components/DateFilter/DateFilter';
import * as qs from 'qs';

export const UseFilter = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<GenreOption[] | null>(null);
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [filter, setFilter] = React.useState<Filter | undefined>(undefined);

  const handleClick = () => {
    const genre = selectedGenre?.map((item: GenreOption) => item.value).join();
    setFilter({ genre, startDate, endDate });
  };

  const filterComponent = () => (
    <FilterWrapper>
      <h2>
        <Trans>Filter</Trans>
      </h2>
      <GenreFilter setSelectedGenre={setSelectedGenre} />
      <DateFilter startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <button onClick={handleClick}>
        <Trans>Apply</Trans>
      </button>
    </FilterWrapper>
  );

  return {
    filterComponent: React.useMemo(filterComponent, [selectedGenre, startDate, endDate]),
    filterState: React.useMemo(() => filter, [qs.stringify(filter)]),
  };
};
