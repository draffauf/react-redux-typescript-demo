import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the store function and state
import configureStore from './root/Store';

// Import the root component
import Root from './root/Root';

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
