import useSWR from 'swr';
import { useLingui } from '@lingui/react';
import config from '../config';
import { fetcher } from '../helpers/fetcher';

const { API_URL, API_KEY } = config;

const getApiUrl = (movieItem: string | number, activeLang: string) =>
  `${API_URL}movie/${movieItem}?api_key=${API_KEY}&language=${activeLang}`;

export const useMovie = (movieItem: string | number) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const url = getApiUrl(movieItem, activeLang);
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: error === undefined && data === undefined,
    error,
  };
};
