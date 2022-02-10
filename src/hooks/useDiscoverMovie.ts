import useSWR from 'swr';
import { useLingui } from '@lingui/react';
import config from '../config';
import { fetcher } from '../helpers/fetcher';

const { API_URL, API_KEY } = config;

const getApiUrl = (with_genres: string | undefined, activeLang: string) =>
  `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${with_genres}&language=${activeLang}`; // check if not with_genres

export const useDiscoverMovie = (with_genres: string | undefined) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const url = getApiUrl(with_genres, activeLang);
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: error === undefined && data === undefined,
    error,
  };
};
