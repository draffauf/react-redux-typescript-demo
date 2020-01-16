// App imports
import GetCharacterMock from '../data/GetCharacterMock';
import GetCharactersMock from '../data/GetCharactersMock';
import {
  setCharacter,
  searchCharacters,
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
} from './CharacterActionCreators';
import CharacterActionTypes from './CharacterActionTypes.enum';

// Tests
describe('setCharacter', () => {
  it('creates ISetCharacterAction', () => {
    const action = setCharacter(GetCharacterMock);

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
    const action = searchCharacters(term);

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
    const action = getCharactersStart();

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_START,
      isFetching: true,
    });
  });
});

describe('getCharactersSuccess', () => {
  it('creates IGetCharactersSuccessAction', () => {
    const action = getCharactersSuccess(GetCharactersMock);

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: GetCharactersMock,
      isFetching: false,
    });
  });
});

describe('getCharactersFailure', () => {
  it('creates IGetCharactersFailureAction', () => {
    const action = getCharactersFailure();

    expect(action).toEqual({
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    });
  });
});
