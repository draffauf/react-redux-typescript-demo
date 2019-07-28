import ICharacter from './ICharacter.interface';
import CharacterActionTypes from './CharacterActionTypes.enum';

export interface IGetCharactersStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_START,
  isFetching: true,
}
export interface IGetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
  characters: ICharacter[],
  isFetching: false,
}
export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  isFetching: false,
}