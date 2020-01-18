// Business domain imports
import CharacterActionTypes from './CharacterActionTypes.enum';
import {
  ISetCharacterAction,
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction,
  ISearchCharactersAction
} from './IGetCharactersActions.interface';
import ICharacter from '../data/ICharacter.interface';

export const setCharacterActionCreator = (character: ICharacter): ISetCharacterAction => {
  return {
    type: CharacterActionTypes.SET_CHARACTER,
    character: character,
    isFetching: false,
  };
}

export const searchCharactersActionCreator = (term: string): ISearchCharactersAction => {
  return {
    type: CharacterActionTypes.SEARCH_CHARACTERS,
    term,
    isFetching: true,
  };
}

export const getCharactersStartActionCreator = (): IGetCharactersStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true,
  };
}

export const getCharactersSuccessActionCreator = (characters: ICharacter[]): IGetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters,
    isFetching: false,
  };
}

export const getCharactersFailureActionCreator = (): IGetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
  };
}
