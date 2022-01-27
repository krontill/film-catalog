import * as React from 'react';
import { useMovie } from '../../hooks/useMovie';
import { Trans } from '@lingui/macro';
import { Preview } from '../../components/Preview/Preview';

export const MovieInfo: React.FunctionComponent<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = useMovie(id);

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { title, budget, genres, homepage, overview, poster_path, production_companies: companies } = data;

  return (
    <div>
      <Preview id={data.id} poster_path={poster_path} title={title} overview={overview} />
      <div>
        <Trans>Budget</Trans>: {budget}
      </div>
      <div>
        <Trans>Genres</Trans>:
        <ul>
          {genres?.map((genre: { id: number; name: string }) => (
            <li key={genre.id}>{genre.name} </li>
          ))}
        </ul>
      </div>
      <div>
        <Trans>Site</Trans>:{' '}
        <a href={homepage} rel="nofollow noopener" target="_blank">
          {homepage}
        </a>
      </div>
      <div>
        <Trans>Production companies</Trans>:
        <ul>
          {companies?.map((company: { id: number; name: string }) => (
            <li key={company.id}>{company.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
