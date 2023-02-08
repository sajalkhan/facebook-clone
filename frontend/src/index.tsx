import React from 'react';
import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import './styles/index.scss';
import { store } from 'store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://bbfc31ef4bbe4cd391244a3774218328@o4504645513052160.ingest.sentry.io/4504645518360576',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
