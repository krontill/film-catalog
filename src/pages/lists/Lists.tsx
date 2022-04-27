import * as React from 'react';
import { Trans } from '@lingui/macro';
import { useAuth } from '../../auth/useAuth';
import { useList } from '../../hooks/useList';

export const Lists = () => {
  const auth = useAuth();
  const id = auth?.user?.id;

  const testName = 'List by default';
  const testDescription = 'List of favorite films';
  const response = useList(testName, testDescription, id);
  console.log('Lists response', response);

  const handleCreateList = () => {
    if (!id) return null;
  };

  return (
    <div>
      <Trans>Lists</Trans>
      <button onClick={handleCreateList}>
        <Trans>Create a list</Trans>
      </button>
    </div>
  );
};
