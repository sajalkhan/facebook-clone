import { Loading } from 'components/atoms/loading';
import { ROUTES } from 'constants/routes';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Users = lazy(() => import('pages/users'));
const RqUsers = lazy(() => import('pages/rq-users'));
const RqUsersDetails = lazy(() => import('pages/userDetails'));
// const NotFound = lazy(() => import('pages/not-found'));

export const PagesRoutes: React.FC = () => (
  <Suspense fallback={<Loading overlay />}>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.USERS} element={<Users />} />
      <Route path={ROUTES.RQ_USERS} element={<RqUsers />} />
      <Route path={ROUTES.RQ_USER_DETAILS} element={<RqUsersDetails />} />
      {/* <Route component={<NotFound />} /> */}
    </Routes>
  </Suspense>
);
