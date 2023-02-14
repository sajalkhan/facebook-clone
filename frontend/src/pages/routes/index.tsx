import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoggedInRoutes } from './protectedRoute';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
// const NotFound = lazy(() => import('pages/not-found'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route element={<LoggedInRoutes />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>

      <Route path={ROUTES.LOGIN} element={<Login />} />
    </Routes>
  </Suspense>
);
