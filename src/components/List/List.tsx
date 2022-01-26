import * as React from 'react';
import { Trans } from '@lingui/macro';
import { Image } from '../Image/Image';

interface Item {
  title: string;
  overview: string;
  id: number;
  poster_path: string;
}

interface List {
  list: Array<Item>;
}

export const List: React.FunctionComponent<List> = ({ list }) => (
  <ul>
    {list.map((item: Item) => (
      <li key={item.id}>
        <Image imagePath={item.poster_path} />
        <br />
        <span>
          <Trans>Title</Trans>:{item.title}
        </span>
        <br />
        <span>
          <Trans>Overview</Trans>:{item.overview}
        </span>
      </li>
    ))}
  </ul>
);
