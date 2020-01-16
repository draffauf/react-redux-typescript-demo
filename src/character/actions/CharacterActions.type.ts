import {
  ISetCharacterAction,
  ISearchCharactersAction,
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from './IGetCharactersActions.interface';

// Combine the action types with a union (we assume there are more)
type CharacterActions =
  ISetCharacterAction
  | ISearchCharactersAction
  | IGetCharactersStartAction
  | IGetCharactersSuccessAction
  | IGetCharactersFailureAction;

export default CharacterActions;
