import { Filter } from '../types/Filter';
import { getRandomInt } from '../helpers/getRandomInt';
import { getApiUrl } from '../helpers/getApiUrl';
import * as qs from 'qs';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { useMemo } from 'react';

const minPages = 1;
const maxPages = 500;
const apiUrl = 'discover/movie';

export const useDiscoverRandomMovie = (filter: Filter) => {
  const { genre, startDate, endDate } = filter;
  const params = {
    with_genres: genre,
    'release_date.gte': startDate?.toISOString(),
    'release_date.lte': endDate?.toISOString(),
  };
  const url = getApiUrl(apiUrl, qs.stringify(params));
  const { data, error } = useSWR(url, fetcher);

  const totalPages = data?.total_pages;
  const randomPageIndex = useMemo(() => getRandomInt(Math.min(totalPages, maxPages)), [totalPages]);
  const newParams = Number.isNaN(randomPageIndex) ? params : { ...params, page: Math.max(randomPageIndex, minPages) };
  const urlWithRandomPage = getApiUrl(apiUrl, qs.stringify(newParams));
  const isReady = error === undefined && totalPages >= minPages;
  const { data: dataRandomPage, error: errorRandomPage } = useSWR(isReady ? urlWithRandomPage : null, fetcher);

  const isLoading =
    totalPages < minPages
      ? error === undefined && data === undefined
      : errorRandomPage === undefined && dataRandomPage === undefined;

  return {
    data: totalPages < minPages ? data : dataRandomPage,
    isLoading,
    error: errorRandomPage,
  };
};
