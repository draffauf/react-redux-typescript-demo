import * as React from 'react';

// Make the store available to all container components in the application
// without passing it explicitly
import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import CSS
import './Root.css';

// Import out App component
import App from '../app/App';

// Import IAppState
import { IAppState } from './Store';

// Create interface for Props
interface IProps {
  store: Store<IAppState>;
}

// Create a root component that receives the store via props and
// wraps the App component with Provider, giving props to containers
const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

export default Root;