import * as Sentry from '@sentry/react';
import { Loading } from 'components/atoms/loading';
import { Navigation } from 'components/atoms/navigation';
import { ROUTES } from 'constants/routes';
import GlobalError from 'pages/global-error';
import { PagesRoutes } from 'pages/routes';
import React from 'react';
import { useIsMutating } from 'react-query';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const isMutating = useIsMutating();

  return (
    <>
      <Navigation>
        <>
          <Link to={ROUTES.HOME}>home</Link>
          <Link to={ROUTES.USERS}>users</Link>
          <Link to={ROUTES.RQ_USERS}>rq users</Link>
        </>
      </Navigation>
      <Sentry.ErrorBoundary fallback={({ error, resetError }) => <GlobalError error={error} onReset={resetError} />}>
        <PagesRoutes />
        {!!isMutating && <Loading overlay />}
      </Sentry.ErrorBoundary>
    </>
  );
};

export default App;
