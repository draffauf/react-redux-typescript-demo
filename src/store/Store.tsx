// Third-Party dependencies
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import CharacterReducer from '../character/reducers/CharacterReducer';

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  characterState: CharacterReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
                  rootReducer,
                  undefined,
                  composeWithDevTools(applyMiddleware(thunk))
                );

  return store;
}
