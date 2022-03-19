import * as React from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { MoviesPage } from './pages/movies/MoviesPage';
import { Random } from './pages/random/Random';
import { DetailsPage } from './pages/details/DetailsPage';
import { Lists } from './pages/lists/Lists';
import { Trans } from '@lingui/macro';
import { RequireAuth } from './auth/RequireAuth';

export const DASHBOARD_PATH = '/';
const MOVIES_PATH = '/movies';
const RANDOM_PATH = '/random';
const DETAILS_PATH = '/details-movie-:id';
export const LISTS_PATH = '/lists';

const DASHBOARD_TITLE = <Trans>Dashboard</Trans>;
const MOVIES_TITLE = <Trans>Movies</Trans>;
const RANDOM_TITLE = <Trans>Random movie</Trans>;
const DETAILS_TITLE = <Trans>Movie details</Trans>;
const LISTS_TITLE = <Trans>Movie lists</Trans>;

export const nav = [
  {
    path: DASHBOARD_PATH,
    title: DASHBOARD_TITLE,
  },
  {
    path: MOVIES_PATH,
    title: MOVIES_TITLE,
  },
  {
    path: RANDOM_PATH,
    title: RANDOM_TITLE,
  },
  {
    path: LISTS_PATH,
    title: LISTS_TITLE,
  },
];

export const routes = [
  {
    path: DASHBOARD_PATH,
    title: DASHBOARD_TITLE,
    component: <Dashboard />,
  },
  {
    path: MOVIES_PATH,
    title: MOVIES_TITLE,
    component: <MoviesPage />,
  },
  {
    path: RANDOM_PATH,
    title: RANDOM_TITLE,
    component: <Random />,
  },
  {
    path: DETAILS_PATH,
    title: DETAILS_TITLE,
    component: <DetailsPage />,
  },
  {
    path: LISTS_PATH,
    title: LISTS_TITLE,
    component: (
      <RequireAuth>
        <Lists />
      </RequireAuth>
    ),
  },
];
