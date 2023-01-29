import * as Sentry from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';
import './styles/index.scss';
const queryClient = new QueryClient();

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  // integrations: [new BrowserTracing()],
  // tracesSampleRate: 1.0,
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById('root')
);
