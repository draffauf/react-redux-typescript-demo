// Third-Party dependencies
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';

// Thunk
import thunk from 'redux-thunk';

// Redux Dev Tools Extension
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import characterReducer from '../character/characterReducer';



// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  characterState: characterReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}