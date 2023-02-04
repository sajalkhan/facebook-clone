import * as Sentry from '@sentry/react';
import { ROUTES } from 'constants/routes';
import GlobalError from 'pages/global-error';
import { PagesRoutes } from 'pages/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <>
        <Link to={ROUTES.HOME}>home</Link>
        <Link to={ROUTES.LOGIN}>login</Link>
        <Link to={ROUTES.REGISTER}>register</Link>
      </>
      <Sentry.ErrorBoundary fallback={({ error, resetError }) => <GlobalError error={error} onReset={resetError} />}>
        <PagesRoutes />
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
