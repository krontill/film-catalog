import * as React from 'react';
import { Dashboard } from './pages/dashboard/Dashboard';
import { MoviesPage } from './pages/movies/MoviesPage';
import { Random } from './pages/random/Random';
import { DetailsPage } from './pages/details/DetailsPage';
import { Lists } from './pages/lists/Lists';
import { Trans } from '@lingui/macro';
import { RequireAuth } from './auth/RequireAuth';

export enum Path {
  dashboard = '/',
  movies = '/movies',
  random = '/random',
  details = '/details-movie-:id',
  lists = '/lists',
}

const dashboardTitle = <Trans>Dashboard</Trans>;
const moviesTitle = <Trans>Movies</Trans>;
const randomTitle = <Trans>Random movie</Trans>;
const detailsTitle = <Trans>Movie details</Trans>;
const listsTitle = <Trans>Movie lists</Trans>;

export const nav = [
  {
    path: Path.dashboard,
    title: dashboardTitle,
  },
  {
    path: Path.movies,
    title: moviesTitle,
  },
  {
    path: Path.random,
    title: randomTitle,
  },
  {
    path: Path.lists,
    title: listsTitle,
  },
];

export const routes = [
  {
    path: Path.dashboard,
    title: dashboardTitle,
    component: <Dashboard />,
  },
  {
    path: Path.movies,
    title: moviesTitle,
    component: <MoviesPage />,
  },
  {
    path: Path.random,
    title: randomTitle,
    component: <Random />,
  },
  {
    path: Path.details,
    title: detailsTitle,
    component: <DetailsPage />,
  },
  {
    path: Path.lists,
    title: listsTitle,
    component: (
      <RequireAuth>
        <Lists />
      </RequireAuth>
    ),
  },
];
