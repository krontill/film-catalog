import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { getApiUrl } from '../helpers/getApiUrl';

export const useMovie = (movieItem: string | number) => {
  const url = getApiUrl(`movie/${movieItem}`);
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: error === undefined && data === undefined,
    error,
  };
};
