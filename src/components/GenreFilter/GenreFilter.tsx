import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useGenreMovie } from '../../hooks/useGenreMovie';
import Select from 'react-select';
import { Options } from '../../types/GenreOption';

type Props = {
  setSelectedGenre: React.Dispatch<React.SetStateAction<Options | null>>;
};

export const GenreFilter: React.FC<Props> = ({ setSelectedGenre }) => {
  const { data, isLoading, error } = useGenreMovie();

  if (error !== undefined) return <Trans>loading error</Trans>;

  if (isLoading) return <Trans>loading...</Trans>;

  const { genres } = data;

  const options = genres.map((genre: { id: number; name: string }) => ({ label: genre.name, value: genre.id }));

  const onChange = (options: Options) => setSelectedGenre(options);

  return (
    <>
      <span>
        <Trans>Genre</Trans>
      </span>
      <Select isMulti options={options} onChange={onChange} />
    </>
  );
};
