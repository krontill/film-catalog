import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useDiscoverMovie } from '../../hooks/useDiscoverMovie';
import { PreviewList } from '../../components/PreviewList/PreviewList';
import { ListWrapper } from '../details/styled';
import { Filter } from '../../types/Filter';
import { Pagination } from '../../components/Pagination/Pagination';
import { useEffect } from 'react';

export const DiscoverMovie: React.FC<{ filter: Filter | undefined }> = ({ filter }) => {
  if (filter === undefined) return null;

  const { genre, startDate, endDate } = filter;

  if ((genre === undefined || genre === '') && startDate === null && endDate === null) return null;

  const [pageIndex, setPageIndex] = React.useState(1);

  useEffect(() => {
    if (pageIndex !== 1) {
      setPageIndex(1);
    }
  }, [genre, startDate, endDate]);

  const { data, isLoading, error } = useDiscoverMovie(filter, pageIndex);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { results, total_pages } = data;

  return (
    <ListWrapper>
      <PreviewList list={results} />
      <Pagination pageIndex={pageIndex} total_pages={total_pages} setPageIndex={setPageIndex} />
    </ListWrapper>
  );
};
