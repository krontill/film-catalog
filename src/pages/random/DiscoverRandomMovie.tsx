import * as React from 'react';
import { Trans } from '@lingui/macro';
import { Filter } from '../../types/Filter';
import { Preview } from '../../components/Preview/Preview';
import { getRandomInt } from '../../helpers/getRandomInt';
import { useDiscoverRandomMovie } from '../../hooks/useDiscoverRandomMovie';

export const DiscoverRandomMovie: React.FC<{ filter: Filter | undefined }> = React.memo(({ filter }) => {
  if (!filter) return null;

  const { genre, startDate, endDate } = filter;

  if ((genre === undefined || genre === '') && startDate === null && endDate === null) return null;

  const { data, isLoading, error } = useDiscoverRandomMovie(filter);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { results } = data;
  const count = results.length;

  if (count === 0) return <Trans>Movie not found</Trans>;

  const randomMovieIndex = getRandomInt(count);
  const randomMovie = results[randomMovieIndex];

  return <Preview {...randomMovie} />;
});
