// App imports
import GetCharacterMock from '../data/GetCharacterMock';
import GetCharactersMock from '../data/GetCharactersMock';
import {
  setCharacterActionCreator,
  searchCharactersActionCreator,
  getCharactersStartActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from './CharacterActionCreators';
import CharacterActionTypes from './CharacterActionTypes.enum';

// Tests
describe('setCharacter', () => {
  it('creates ISetCharacterAction', () => {
    const action = setCharacterActionCreator(GetCharacterMock);

    expect(action).toEqual({
      type: CharacterActionTypes.SET_CHARACTER,
      character: GetCharacterMock,
      isFetching: false,
    });
  });
});

describe('searchCharacters', () => {
  it('creates ISearchCharactersAction', () => {
    const term = "Darth";
    const action = searchCharactersActionCreator(term);

    expect(action).toEqual({
      type: CharacterActionTypes.SEARCH_CHARACTERS,
      term,
      isFetching: true,
    });
  });
});

describe('getCharactersStart', () => {
  it('creates IGetCharactersStartAction', () => {
    const term = "Darth";
    const action = getCharactersStartActionCreator();

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_START,
      isFetching: true,
    });
  });
});

describe('getCharactersSuccess', () => {
  it('creates IGetCharactersSuccessAction', () => {
    const action = getCharactersSuccessActionCreator(GetCharactersMock);

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: GetCharactersMock,
      isFetching: false,
    });
  });
});

describe('getCharactersFailure', () => {
  it('creates IGetCharactersFailureAction', () => {
    const action = getCharactersFailureActionCreator();

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    });
  });
});
