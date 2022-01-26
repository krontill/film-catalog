import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import config from '../config';

const { API_URL, API_KEY } = config;

const getApiUrl = () => `${API_URL}configuration?api_key=${API_KEY}`;

export const useImage = () => {
  const url = getApiUrl();
  const { data, error } = useSWR(url, fetcher);
  const baseUrl = data?.images?.base_url;
  const posterSizes = data?.images?.poster_sizes;

  return {
    baseUrl,
    isLoadingImage: error === undefined && data === undefined,
    posterSizes,
  };
};
