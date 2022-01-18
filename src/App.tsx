import * as React from 'react';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { NotFound } from './pages/404/NotFound';

export const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
        <Route key={404} path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>
);
