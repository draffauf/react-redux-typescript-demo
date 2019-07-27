import ICharacter from './ICharacter.interface';
import CharacterActionTypes from './CharacterActionTypes.enum';

// Actions interfaces
export interface IGetCharactersStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_START;
}
export interface IGetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS;
  characters: ICharacter[];
}
export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE;
}
