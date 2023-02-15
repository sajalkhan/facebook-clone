import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoggedInRoutes, NotLoggedInRoutes } from './protectedRoute';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route element={<LoggedInRoutes />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>
      <Route element={<NotLoggedInRoutes />}>
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      </Route>
    </Routes>
  </Suspense>
);
