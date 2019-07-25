import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the store function and state
import configureStore from './store/Store';
import { getAllCharacters } from './actions/CharacterActions';

// Import the root component
import Root from './components/root/Root';

// Generate the store
const store = configureStore();

// Request the characters
store.dispatch(getAllCharacters());

// Render the App
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
