import useSWR from 'swr';
import * as qs from 'qs';
import { fetcher } from '../helpers/fetcher';
import { Filter } from '../types/Filter';
import { getApiUrl } from '../helpers/getApiUrl';

export const useDiscoverMovie = (filter: Filter, pageIndex: number) => {
  const { genre, startDate, endDate } = filter;
  const params = {
    with_genres: genre,
    'release_date.gte': startDate?.toISOString(),
    'release_date.lte': endDate?.toISOString(),
    page: pageIndex,
  };
  const url = getApiUrl('discover/movie', qs.stringify(params));
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: error === undefined && data === undefined,
    error,
  };
};
