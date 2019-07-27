import characterReducer from './characterReducer';
import ICharacterState from "./ICharacterState.interface";
import {
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from "./IGetCharactersActions.interface";
import CharacterActionTypes from './CharacterActionTypes.enum';
import getCharactersMock from './getCharactersMock';

const initialState: ICharacterState = {
  characters: [],
  isFetching: false,
};

describe('characterReducer action responses for', () => {
  describe('GET_CHARACTERS_START', () => {
    const action: IGetCharactersStartAction = {
      type: CharacterActionTypes.GET_CHARACTERS_START,
      isFetching: true,
    };

    const newState = characterReducer(initialState, action);
    it('is fetching', () => {
      expect(newState.isFetching).toBe(true);
    });
  });

  describe('GET_CHARACTERS_SUCCESS', () => {
    const action: IGetCharactersSuccessAction = {
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: getCharactersMock,
      isFetching: false,
    };

    const newState = characterReducer(initialState, action);
    it('has fetched characters', () => {
      expect(newState.characters).toEqual(getCharactersMock);
    });

    it('is not fetching', () => {
      expect(newState.isFetching).toBe(false);
    });
  });

  describe('GET_CHARACTERS_FAILURE', () => {
    const action: IGetCharactersFailureAction = {
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
      isFetching: false,
    };

    const newState = characterReducer(initialState, action);

    it('does not have fetched characters', () => {
      expect(newState.characters).toEqual([]);
    });

    it('is not fetching', () => expect(newState.isFetching).toBe(false));
  });
});
