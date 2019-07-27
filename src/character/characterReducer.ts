// Import Reducer type
import { Reducer } from 'redux';

// Business domain imports
import {
  CharacterActions,
  CharacterActionTypes,
} from './CharacterActions';

import ICharacterState from './ICharacterState.interface';

// Business logic
const initialCharacterState: ICharacterState = {
  characters: [],
};

const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
      };
    }
    default:
      return state;
  }
};

export default characterReducer;