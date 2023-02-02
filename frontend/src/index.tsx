import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './pages/App';

Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0'
  // integrations: [new BrowserTracing()],
  // tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Router>
      <App />
    </Router>,
  document.getElementById('root'));
