import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Business domain
import configureStore from "./store/Store";
import Root from './root/Root';
import 'bootstrap/dist/css/bootstrap.css';

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
