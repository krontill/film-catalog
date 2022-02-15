import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useDiscoverMovie } from '../../hooks/useDiscoverMovie';
import { PreviewList } from '../../components/PreviewList/PreviewList';
import { ListWrapper } from '../details/styled';
import { Filter } from '../../types/Filter';

export const DiscoverMovie: React.FC<{ filter: Filter | undefined }> = ({ filter }) => {
  if (filter === undefined) return null;

  const { genre, startDate, endDate } = filter;

  if ((genre === undefined || genre === '') && startDate === null && endDate === null) return null;

  const { data, isLoading, error } = useDiscoverMovie(filter);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { results } = data;

  return (
    <ListWrapper>
      <PreviewList list={results} />
    </ListWrapper>
  );
};
