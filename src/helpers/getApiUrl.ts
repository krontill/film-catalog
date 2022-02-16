import config from '../config';
import { useLingui } from '@lingui/react';

const { API_URL, API_KEY } = config;

export const getApiUrl = (url: string, queryString?: string) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;

  const queryStringParameters = queryString === undefined ? '' : `&${queryString}`;

  return `${API_URL}${url}?api_key=${API_KEY}&language=${activeLang}${queryStringParameters}`;
};
