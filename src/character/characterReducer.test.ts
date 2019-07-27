import characterReducer from './characterReducer';
import ICharacterState from "./ICharacterState";

import {
  CharacterActionTypes,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction,
} from './CharacterActions';

import getCharactersMock from './getCharactersMock';

describe('characterReducer', () => {
  describe('when successful', () => {
    const action: IGetCharactersSuccessAction = {
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: getCharactersMock,
    };
    const initialState: ICharacterState = {
      characters: [],
    };
    const newState = characterReducer(initialState, action)
      it('returns new state with fetched characters', () => {
        expect(newState.characters).toEqual(getCharactersMock);
      });
  });

  describe('default path for unknown type', () => {
    const fakeAction: IGetCharactersFailureAction = {
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE
    };
    const initialState: ICharacterState = {
      characters: [],
    };
    const newState = characterReducer(initialState, fakeAction)

    it('returns the same state', () => expect(newState).toEqual(initialState));
  });
});
