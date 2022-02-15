import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { getApiUrl } from '../helpers/getApiUrl';

export const useGenreMovie = () => {
  const url = getApiUrl('genre/movie/list');
  const { data, error } = useSWR(url, fetcher);

  return { data, isLoading: error === undefined && data === undefined, error };
};
