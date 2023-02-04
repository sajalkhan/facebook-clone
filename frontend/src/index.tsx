import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom';
import App from '@/pages/App';
import './styles/index.scss';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0'
  // integrations: [new BrowserTracing()],
  // tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
