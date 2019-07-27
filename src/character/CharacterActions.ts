// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import ICharacter from './ICharacter.interface';
import ICharacterState from './ICharacterState.interface';



// Action constants
export enum CharacterActionTypes {
  GET_CHARACTERS_START = 'GET_CHARACTERS_START',
  GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE',
}



// Actions interfaces
export interface IGetCharactersStartAction {
  type: CharacterActionTypes.GET_CHARACTERS_START,
}

export interface IGetCharactersSuccessAction {
  type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
  characters: ICharacter[],
}

export interface IGetCharactersFailureAction {
  type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
}

// Combine the action types with a union (we assume there are more)
// example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
export type CharacterActions =
  IGetCharactersStartAction |
  IGetCharactersSuccessAction |
  IGetCharactersFailureAction;



// Action implementations
const getCharactersStart = () => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
  };
}

const getCharactersSuccess = (data: any) => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters: data.results,
  };
}

const getCharactersFailure = () => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
  };
}



// ActionCreators

// <Promise<Return Type>, State Interface, Type of Param, Type of Action>
export const getCharacters: ActionCreator<
  ThunkAction<
    Promise<any>,
    ICharacterState,
    null,
    IGetCharactersSuccessAction
  >
> = () => {
  return (dispatch: Dispatch) => {
    dispatch(getCharactersStart());

    const url = 'https://swapi.co/api/people/';
    return axios.get(url)
      .then((response) => {
        dispatch(getCharactersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCharactersFailure());
      });
  };
};