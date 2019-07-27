import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

// App imports
import getCharactersMock from './getCharactersMock';
import { getCharacters } from './CharacterActions';
import CharacterActionTypes from './CharacterActionTypes.enum';

// Configure the mockStore function
// Note: if this begins to be used in several places, make a helper
const mockStore = configureMockStore([thunk]);

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
          results: getCharactersMock,
        },
      });
    });

    const expectedActions = [
      {
        type: CharacterActionTypes.GET_CHARACTERS_START,
        isFetching: true,
      },
      {
        type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
        characters: getCharactersMock,
        isFetching: false,
      },
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
      {
        type: CharacterActionTypes.GET_CHARACTERS_START,
        isFetching: true,
      },
      {
        type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
        isFetching: false,
      },
    ];

    const initialState = { characters: [] };
    const store = mockStore(initialState);

    return store.dispatch<any>(getCharacters()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});