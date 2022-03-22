import config from '../config';
import { useLingui } from '@lingui/react';

const { API_URL, API_KEY } = config;

export const getApiUrl = (url: string, queryString?: string, hasLang = true) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;

  const queryStringParameters = queryString === undefined ? '' : `&${queryString}`;
  const langParameter = hasLang ? `&language=${activeLang}` : '';

  return `${API_URL}${url}?api_key=${API_KEY}${langParameter}${queryStringParameters}`;
};
