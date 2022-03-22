import { getApiUrl } from '../helpers/getApiUrl';
import { complexFetcher } from '../helpers/fetcher';
import * as qs from 'qs';
import { useLingui } from '@lingui/react';

export const useList = (name: string, description: string, id: string | undefined) => {
  const { i18n } = useLingui();
  const activeLang = i18n.locale;
  if (id === undefined) return null;

  const params = { session_id: id };
  const bodyParams = {
    name,
    description,
    language: activeLang,
  };

  const url = getApiUrl('list', qs.stringify(params), false);
  const response = complexFetcher(url, JSON.stringify(bodyParams), 'POST');
  console.log('response', response);

  return response;
};
