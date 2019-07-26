import {
  characterReducer,
  ICharacterState,
} from './characterReducer';

import {
  CharacterActionTypes,
  ICharacterGetCharactersSuccessAction,
  ICharacterGetCharactersFailureAction,
} from './CharacterActions';

import getCharactersMock from './getCharactersMock';

describe('characterReducer', () => {
  describe('For ICharacterGetCharactersSuccessAction', () => {
    const action: ICharacterGetCharactersSuccessAction = {
      type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
      characters: getCharactersMock,
    };
    const initialState: ICharacterState = {
      characters: [],
    };
    const newState = characterReducer(initialState, action)
      it('returns new state with characters', () => {
        expect(newState.characters).toEqual(getCharactersMock);
      });
  });

  describe('default path for unknown type', () => {
    const fakeAction: ICharacterGetCharactersFailureAction = {
      type: CharacterActionTypes.GET_CHARACTERS_FAILURE
    };
    const initialState: ICharacterState = {
      characters: [],
    };
    const newState = characterReducer(initialState, fakeAction)

    it('returns the same state', () => expect(newState).toEqual(initialState));
  });
});
