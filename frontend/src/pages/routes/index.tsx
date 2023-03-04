import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoggedInRoutes, NotLoggedInRoutes } from './protectedRoute';

const Home = lazy(() => import('pages/home'));
const Login = lazy(() => import('pages/login'));
const Reset = lazy(() => import('pages/reset'));

const Activate = lazy(() => import('pages/activate'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route element={<LoggedInRoutes />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route
          path={ROUTES.ACTIVATE}
          element={
            <Activate>
              <Home />
            </Activate>
          }
        />
      </Route>
      <Route element={<NotLoggedInRoutes />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.RESET} element={<Reset />} />
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      </Route>
    </Routes>
  </Suspense>
);
