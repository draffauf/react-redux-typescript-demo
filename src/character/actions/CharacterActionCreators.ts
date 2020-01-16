// Business domain imports
import CharacterActionTypes from './CharacterActionTypes.enum';
import {
  ISetCharacterAction,
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction,
  ISearchCharactersAction
} from './IGetCharactersActions.interface';

export const setCharacter = (character: any): ISetCharacterAction => {
  return {
    type: CharacterActionTypes.SET_CHARACTER,
    character: character,
    isFetching: false,
  };
}

export const searchCharacters = (term: string): ISearchCharactersAction => {
  return {
    type: CharacterActionTypes.SEARCH_CHARACTERS,
    term,
    isFetching: true,
  };
}

export const getCharactersStart = (): IGetCharactersStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true,
  };
}

export const getCharactersSuccess = (characters: any): IGetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters,
    isFetching: false,
  };
}

export const getCharactersFailure = (): IGetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
  };
}
