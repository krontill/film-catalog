import * as React from 'react';
import { Preview } from '../Preview/Preview';
import { PreviewItem } from '../../types/PreviewItem';

interface PreviewList {
  list: Array<PreviewItem>;
}

export const PreviewList: React.FC<PreviewList> = ({ list }) => (
  <ul>
    {list?.map((item: PreviewItem) => (
      <li key={item.id}>
        <Preview {...item} />
      </li>
    ))}
  </ul>
);
