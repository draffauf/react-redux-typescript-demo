// Import Reducer type
import { Reducer } from 'redux';

import CharacterActions from './CharacterActions.type';
import CharacterActionTypes from './CharacterActionTypes.enum';
import ICharacterState from './ICharacterState.interface';

// Business logic
const initialCharacterState: ICharacterState = {
  characters: [],
  isFetching: false,
};

const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_CHARACTERS_START: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_SUCCESS: {
      return {
        ...state,
        characters: action.characters,
        isFetching: action.isFetching,
      };
    }
    case CharacterActionTypes.GET_CHARACTERS_FAILURE: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    default:
      return state;
  }
};

export default characterReducer;