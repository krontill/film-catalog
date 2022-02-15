import * as React from 'react';
import { Trans } from '@lingui/macro';
import { Button } from './styled';

interface Props {
  pageIndex: number;
  total_pages: number;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const displayPagesAround = 3;

export const Pagination: React.FC<Props> = ({ pageIndex, total_pages, setPageIndex }) => {
  if (total_pages === 1) return null;

  const from = pageIndex - displayPagesAround > 0 ? pageIndex - displayPagesAround : 1;
  const to = pageIndex + displayPagesAround < total_pages ? pageIndex + displayPagesAround : total_pages;

  const displayedPages = [];
  for (let i = from; i <= to; i++) {
    displayedPages.push(i);
  }

  return (
    <div>
      {pageIndex > 1 && (
        <button onClick={() => setPageIndex(pageIndex - 1)}>
          <Trans>Prev</Trans>
        </button>
      )}
      {displayedPages.map((displayedPageIndex) => (
        <Button
          key={displayedPageIndex}
          isActive={pageIndex === displayedPageIndex}
          onClick={() => setPageIndex(displayedPageIndex)}
        >
          {displayedPageIndex}
        </Button>
      ))}
      {pageIndex < total_pages && (
        <button onClick={() => setPageIndex(pageIndex + 1)}>
          <Trans>Next</Trans>
        </button>
      )}
    </div>
  );
};
