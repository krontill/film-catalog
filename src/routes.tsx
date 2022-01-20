import * as React from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Movies } from './pages/movies/Movies';
import { Random } from './pages/random/Random';
import { Details } from './pages/details/Details';
import { Lists } from './pages/lists/Lists';
import { Trans } from '@lingui/macro';

export const DASHBOARD_PATH = '/';
export const MOVIES_PATH = '/movies';
export const RANDOM_PATH = '/random';
export const DETAILS_PATH = '/details';
export const LISTS_PATH = '/lists';

export const DASHBOARD_TITLE = <Trans>Dashboard</Trans>;
export const MOVIES_TITLE = <Trans>Movies</Trans>;
export const RANDOM_TITLE = <Trans>Random movie</Trans>;
export const DETAILS_TITLE = <Trans>Movie details</Trans>;
export const LISTS_TITLE = <Trans>Movie lists</Trans>;

export const routes = [
  {
    path: DASHBOARD_PATH,
    title: DASHBOARD_TITLE,
    component: <Dashboard />,
  },
  {
    path: MOVIES_PATH,
    title: MOVIES_TITLE,
    component: <Movies />,
  },
  {
    path: RANDOM_PATH,
    title: RANDOM_TITLE,
    component: <Random />,
  },
  {
    path: DETAILS_PATH,
    title: DETAILS_TITLE,
    component: <Details />,
  },
  {
    path: LISTS_PATH,
    title: LISTS_TITLE,
    component: <Lists />,
  },
];
