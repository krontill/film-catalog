import * as React from 'react';
import { useImage } from '../../hooks/useImage';
import { Trans } from '@lingui/macro';

interface Image {
  imagePath?: string;
}

export const Image: React.FC<Image> = ({ imagePath }) => {
  if (imagePath === null || imagePath === undefined) return null;

  const { baseUrl, isLoadingImage, posterSizes } = useImage();

  if (isLoadingImage) return <Trans>Loading image</Trans>;

  if (baseUrl === undefined || posterSizes === undefined) return null;

  const posterSize = posterSizes[2];
  const src = baseUrl + posterSize + imagePath;

  return <img src={src} alt="poster" />;
};
