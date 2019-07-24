
// Import Reducer type
import { Reducer } from 'redux';
import {
  CharacterActions,
  CharacterActionTypes,
} from '../actions/CharacterActions';

// Define the Character type
export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

// Define the Character State
export interface ICharacterState {
  readonly characters: ICharacter[];
}

// Define the initial state
const initialCharacterState: ICharacterState = {
  characters: [],
};

export const characterReducer: Reducer<ICharacterState, CharacterActions> = (
  state = initialCharacterState,
  action
) => {
  switch (action.type) {
    case CharacterActionTypes.GET_ALL: {
      return {
        ...state,
        characters: action.characters,
      };
    }
    default:
      return state;
  }
};