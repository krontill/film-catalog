import * as React from 'react';
import { Image } from '../Image/Image';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import { PreviewItem } from '../../types/PreviewItem';
import { AddToFavorites } from '../AddToFavorites/AddToFavorites';

export const Preview: React.FC<PreviewItem> = ({ id, poster_path: posterPath, title, overview }) => (
  <>
    <Link to={`/details-movie-${id}`}>
      <Image imagePath={posterPath} />
      <br />
      <span>
        <Trans>Title</Trans>:{title}
      </span>
    </Link>
    <br />
    <AddToFavorites id={id} />
    <br />
    <span>
      <Trans>Overview</Trans>:{overview}
    </span>
  </>
);
