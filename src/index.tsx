import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import * as RoutesModule from './routes';

const routes = RoutesModule.routes;

ReactDOM.render(
  <BrowserRouter children={routes} basename="/" />,
  document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
