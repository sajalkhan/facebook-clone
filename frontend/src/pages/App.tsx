import * as Sentry from '@sentry/react';
import GlobalError from 'pages/global-error';
import { PagesRoutes } from 'pages/routes';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Sentry.ErrorBoundary fallback={({ error, resetError }) => <GlobalError error={error} onReset={resetError} />}>
        <PagesRoutes />
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
