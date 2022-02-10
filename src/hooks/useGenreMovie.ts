import config from '../config';
import { useLingui } from '@lingui/react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';

const { API_URL, API_KEY } = config;

const getApiUrl = (activeLang: string) => `${API_URL}genre/movie/list?api_key=${API_KEY}&language=${activeLang}`;

export const useGenreMovie = () => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  const url = getApiUrl(activeLang);
  const { data, error } = useSWR(url, fetcher);

  return { data, isLoading: error === undefined && data === undefined, error };
};
