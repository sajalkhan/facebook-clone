import * as Sentry from '@sentry/react';
import { Navigation } from '@atom/navigation';
import { ROUTES } from 'src/constants/routes';
import GlobalError from 'src/pages/global-error';
import { PagesRoutes } from 'src/pages/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Navigation>
        <>
          <Link to={ROUTES.HOME}>home</Link>
          <Link to={ROUTES.LOGIN}>login</Link>
          <Link to={ROUTES.REGISTER}>register</Link>
        </>
      </Navigation>
      <Sentry.ErrorBoundary fallback={({ error, resetError }) => <GlobalError error={error} onReset={resetError} />}>
        <PagesRoutes />
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
