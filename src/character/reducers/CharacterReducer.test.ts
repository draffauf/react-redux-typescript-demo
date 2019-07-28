import {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure
} from '../actions/CharacterActionCreators';
import ICharacterState from "../data/ICharacterState.interface";
import GetCharactersMock from '../data/GetCharactersMock';
import CharacterReducer from './CharacterReducer';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('CharacterReducer action type responses for', () => {
  describe('GET_CHARACTERS_START', () => {
    const action = getCharactersStart();
    const newState = CharacterReducer(initialState, action);

    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_CHARACTERS_SUCCESS', () => {
    const data = { results: GetCharactersMock };
    const action = getCharactersSuccess(data);
    const newState = CharacterReducer(initialState, action);
    it('fetched characters', () => {
      expect(newState.characters).toEqual(GetCharactersMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_CHARACTERS_FAILURE', () => {
    const action = getCharactersFailure();
    const newState = CharacterReducer(initialState, action);

    it('has not fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
