import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useDiscoverMovie } from '../../hooks/useDiscoverMovie';
import { PreviewList } from '../../components/PreviewList/PreviewList';
import { ListWrapper } from '../details/styled';

export const DiscoverMovie: React.FC<{ with_genres: string | undefined }> = ({ with_genres }) => {
  if (with_genres === undefined || with_genres.length === 0) return null;

  const { data, isLoading, error } = useDiscoverMovie(with_genres);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { results } = data;

  return (
    <ListWrapper>
      <PreviewList list={results} />
    </ListWrapper>
  );
};
