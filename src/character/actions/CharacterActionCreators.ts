// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Business domain imports
import { RestDataSource } from '../data/RestDataSource';
import ICharacterState from '../data/ICharacterState.interface';
import CharacterActionTypes from './CharacterActionTypes.enum';
import {
  IGetCharactersStartAction,
  IGetCharactersSuccessAction,
  IGetCharactersFailureAction
} from './IGetCharactersActions.interface';
import CharacterActions from './CharacterActions.type';

export const getCharactersStart = (): IGetCharactersStartAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true,
  };
}

export const getCharactersSuccess = (data: any): IGetCharactersSuccessAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters: data.results,
    isFetching: false,
  };
}

export const getCharactersFailure = (): IGetCharactersFailureAction => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
  };
}

// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const getCharacters: ActionCreator<
  ThunkAction<
    Promise<any>,
    ICharacterState,
    null,
    CharacterActions
  >
> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getCharactersStart());
    const dataSource: RestDataSource = new RestDataSource();

    return dataSource.getCharacters()
      .then((response) => {
        dispatch(getCharactersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCharactersFailure());
      });
  };
};


// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const searchCharacters: ActionCreator<
  ThunkAction<
    Promise<any>,
    ICharacterState,
    null,
    CharacterActions
  >
> = (term: String) => {
  return (dispatch: Dispatch) => {
    dispatch(getCharactersStart());
    const dataSource: RestDataSource = new RestDataSource();

    return dataSource.searchCharacters(term)
      .then((response) => {
        dispatch(getCharactersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCharactersFailure());
      });
  };
};
