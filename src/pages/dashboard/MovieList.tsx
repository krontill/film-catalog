import * as React from 'react';
import { Trans } from '@lingui/macro';
import { PreviewList } from '../../components/PreviewList/PreviewList';
import { useMovie } from '../../hooks/useMovie';

interface MovieList {
  movieList: string;
}

const listLength = 5;

export const MovieList: React.FunctionComponent<MovieList> = ({ movieList }) => {
  const { data, isLoading, error } = useMovie(movieList);

  const list = data?.results.slice(0, listLength);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  return <PreviewList list={list} />;
};
