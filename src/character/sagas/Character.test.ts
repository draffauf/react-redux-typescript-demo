import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

// App imports
import GetCharactersMock from '../data/GetCharactersMock';
import {
  searchCharacters,
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
} from '../actions/CharacterActionCreators';
import createSagaMiddleware from 'redux-saga';
import charactersSaga from './Character';

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
      getCharactersStart(),
      getCharactersSuccess(GetCharactersMock),
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

    store.dispatch(getCharactersStart());
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
      getCharactersStart(),
      getCharactersFailure(),
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

    store.dispatch(getCharactersStart());
  });
});


describe('searchCharacters', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates SEARCH_CHARACTERS, GET_CHARACTERS_SUCCESS after successfuly fetching characters', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { results: GetCharactersMock },
      });
    });

     const term = 'Luke';

    const expectedActions = [
      searchCharacters(term),
      getCharactersSuccess(GetCharactersMock)
    ];

    const initialState = {
      character: undefined,
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

    store.dispatch(searchCharacters(term));
  });

  it('creates SEARCH_CHARACTERS, GET_CHARACTERS_FAILURE after failing to fetch characters', done => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const term = 'Luke';

    const expectedActions = [
      searchCharacters(term),
      getCharactersFailure(),
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

    store.dispatch(searchCharacters(term));
  });
});
