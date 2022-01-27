import * as React from 'react';
import { useMovie } from '../../hooks/useMovie';
import { Trans } from '@lingui/macro';
import { PreviewList } from '../../components/PreviewList/PreviewList';
import { RecommendationWrapper } from './styled';

export const Recommendation: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = useMovie(`/${id}/recommendations`);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { results } = data;

  return (
    <RecommendationWrapper>
      <PreviewList list={results} />
    </RecommendationWrapper>
  );
};
