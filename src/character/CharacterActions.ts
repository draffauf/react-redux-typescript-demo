// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Business domain imports
import ICharacterState from './ICharacterState.interface';
import CharacterActionTypes from './CharacterActionTypes.enum';
import CharacterActions from './CharacterActions.type';

// Action implementations
const getCharactersStart = () => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_START,
    isFetching: true,
  };
}

const getCharactersSuccess = (data: any) => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_SUCCESS,
    characters: data.results,
    isFetching: false,
  };
}

const getCharactersFailure = () => {
  return {
    type: CharacterActionTypes.GET_CHARACTERS_FAILURE,
    isFetching: false,
  };
}

// ActionCreators
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