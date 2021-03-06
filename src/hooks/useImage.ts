import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { getApiUrl } from '../helpers/getApiUrl';

export const useImage = () => {
  const url = getApiUrl('configuration');
  const { data, error } = useSWR(url, fetcher);
  const baseUrl = data?.images?.base_url;
  const posterSizes = data?.images?.poster_sizes;

  return {
    baseUrl,
    isLoadingImage: error === undefined && data === undefined,
    posterSizes,
  };
};
