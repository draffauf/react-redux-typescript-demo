// test/utils/mockStore.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
export const mockStore = configureMockStore([thunk]);

// Import mock HTTP client
import moxios from 'moxios';

// App imports
import getCharactersResponse from './getCharactersMock';

import {
  CharacterActionTypes,
  getCharacters
} from './CharacterActions';


// Tests
describe('getAllCharacters', () => {
  beforeEach(() => { moxios.install(); });
  afterEach(() => { moxios.uninstall(); });

  it('creates GET_CHARACTERS_START, GET_CHARACTERS_SUCCESS after successfuly fetching characters', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          results: getCharactersResponse,
        },
      });
    });

    const expectedActions = [
      { type: CharacterActionTypes.GET_CHARACTERS_START },
      {
        type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
        characters: getCharactersResponse,
      },
    ];

    const initialState = { characters: [] };
    const store = mockStore(initialState);

    return store.dispatch(getCharacters()).then(() => {
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
      { type: CharacterActionTypes.GET_CHARACTERS_START },
      { type: CharacterActionTypes.GET_CHARACTERS_FAILURE },
    ];

    const initialState = { characters: [] };
    const store = mockStore(initialState);

    return store.dispatch(getCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});