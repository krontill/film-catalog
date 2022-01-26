import useSWR from 'swr';
import { useLingui } from '@lingui/react';
import config from '../config';
import { fetcher } from '../helpers/fetcher';

const { API_URL, API_KEY } = config;
const listLength = 5;

const getApiUrl = (movieList: string, activeLang: string) =>
  `${API_URL}movie/${movieList}?api_key=${API_KEY}&language=${activeLang}`;

export const useMovie = (movieList: string) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const url = getApiUrl(movieList, activeLang);
  const { data, error } = useSWR(url, fetcher);

  const list = data?.results.slice(0, listLength);

  return {
    list,
    isLoading: error === undefined && data === undefined,
    error,
  };
};
