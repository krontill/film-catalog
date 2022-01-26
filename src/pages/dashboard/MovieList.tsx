import * as React from 'react';
import { Trans } from '@lingui/macro';
import { List } from '../../components/List/List';
import { useMovie } from '../../hooks/useMovie';

interface MovieList {
  movieList: string;
}

export const MovieList: React.FunctionComponent<MovieList> = ({ movieList }) => {
  const { list, isLoading, error } = useMovie(movieList);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  return <List list={list} />;
};
