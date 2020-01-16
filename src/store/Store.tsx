// Third-Party dependencies
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from 'redux';

// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Chrome Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

// Business domain imports
import IAppState from './IAppState.interface';
import CharacterReducer from '../character/reducers/CharacterReducer';
import charactersSagas from '../character/sagas/character';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  characterState: CharacterReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
                  rootReducer,
                  undefined,
                  composeWithDevTools(applyMiddleware(sagaMiddleware))
                );

  sagaMiddleware.run(charactersSagas);

  return store;
}
