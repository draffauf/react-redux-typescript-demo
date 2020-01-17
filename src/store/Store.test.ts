import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

// App imports
import createSagaMiddleware from 'redux-saga';
import {
  getCharactersStartActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from '../character/actions/CharacterActionCreators';
import GetCharactersMock from '../character/data/GetCharactersMock';
import { charactersSaga } from '../character/sagas/Character';

// Configure the mockStore function
// Note: if this begins to be used in several places, make a helper
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

// Tests
describe('getCharactersStart', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_SUCCESS after successfuly fetching characters', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetCharactersMock },
      });
    });

    const expectedActions = [
      getCharactersStartActionCreator(),
      getCharactersSuccessActionCreator(GetCharactersMock),
    ];

    const initialState = {
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);
    sagaMiddleware.run(charactersSaga);

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch(getCharactersStartActionCreator());
  });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_FAILURE after failing to fetch characters', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const expectedActions = [
      getCharactersStartActionCreator(),
      getCharactersFailureActionCreator(),
    ];

    const initialState = { characters: [] };
    const store = mockStore(initialState);
    sagaMiddleware.run(charactersSaga);

    store.subscribe(() => {
      const actions = store.getActions();
      if (actions.length >= expectedActions.length) {
        expect(actions).toEqual(expectedActions);
        done();
      }
    });

    store.dispatch(getCharactersStartActionCreator());
  });
});
