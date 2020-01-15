import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

// App imports
import GetCharacterMock from '../data/GetCharacterMock';
import GetCharactersMock from '../data/GetCharactersMock';
import {
  searchCharacters,
  setCharacter,
  getCharacters,
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
} from './CharacterActionCreators';

// Configure the mockStore function
// Note: if this begins to be used in several places, make a helper
const mockStore = configureMockStore([thunk]);

// Tests
describe('setCharacter', () => {
  it('creates GET_CHARACTER_START, GET_CHARACTER_SUCCESS after successfuly fetching character', () => {
    const initialState = {
      character: undefined,
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    expect(store.dispatch<any>(setCharacter(GetCharacterMock)).character).toEqual(GetCharacterMock);
  });
});


describe('getCharacters', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_SUCCESS after successfuly fetching characters', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: GetCharactersMock,
      });
    });

    const expectedActions = [
      getCharactersStart(),
      getCharactersSuccess(GetCharactersMock)
    ];

    const initialState = {
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    return store.dispatch<any>(getCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_FAILURE after failing to fetch characters', () => {
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

    return store.dispatch<any>(getCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('searchCharacters', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_SUCCESS after successfuly fetching characters', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: GetCharactersMock,
      });
    });

    const expectedActions = [
      getCharactersStart(),
      getCharactersSuccess(GetCharactersMock)
    ];

    const initialState = {
      character: undefined,
      characters: [],
      isFetching: false,
    };
    const store = mockStore(initialState);

    return store.dispatch<any>(searchCharacters('Luke')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_FAILURE after failing to fetch characters', () => {
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

    return store.dispatch<any>(getCharacters('Luke')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
