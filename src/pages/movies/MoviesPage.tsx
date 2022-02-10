import * as React from 'react';
import { Trans } from '@lingui/macro';
import { GenreFilter } from './GenreFilter';
import { GenreOption } from '../../types/GenreOption';
import { DiscoverMovie } from './DiscoverMovie';
import { FilterWrapper } from './styled';

export const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<GenreOption[] | null>(null);
  const [filterGenre, setFilterGenre] = React.useState<string | undefined>();

  const handleClick = () => {
    const withGenres = selectedGenre?.map((item: GenreOption) => item.value).join();
    setFilterGenre(withGenres);
  };

  return (
    <div>
      <Trans>Movies</Trans>
      <FilterWrapper>
        <GenreFilter setSelectedGenre={setSelectedGenre} />
      </FilterWrapper>
      <button onClick={handleClick}>
        <Trans>Apply</Trans>
      </button>
      <DiscoverMovie with_genres={filterGenre} />
    </div>
  );
};
