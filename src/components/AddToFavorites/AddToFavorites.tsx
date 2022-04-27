import * as React from 'react';
import { useAuth } from '../../auth/useAuth';
import { getApiUrl } from '../../helpers/getApiUrl';
import * as qs from 'qs';
import { complexFetcher } from '../../helpers/fetcher';
import { useState } from 'react';

export interface AddToFavorites {
  id: number;
}

export const AddToFavorites: React.FC<AddToFavorites> = ({ id }) => {
  const auth = useAuth();
  const userId = auth?.user?.id;
  const userLists = auth?.user?.lists;
  const [favoriteListId] = userLists || [];
  const [isLoaded, setIsLoaded] = useState<true | false>(true);

  if (!userId) return null;

  const params = { session_id: id };
  const bodyParams = { media_id: id };

  const apiUrl = `/list/${favoriteListId}/add_item`;
  const url = getApiUrl(apiUrl, qs.stringify(params), false);
  const response = complexFetcher(isLoaded ? url : null, JSON.stringify(bodyParams), 'POST');
  console.log('AddToFavorites response', response);

  if (response !== null) {
    setIsLoaded(false);
  }

  const handleClick = () => {
    setIsLoaded(true);
  };

  return <button onClick={handleClick}>Add to favorites</button>;
};
