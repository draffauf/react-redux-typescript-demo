import { call, put, takeEvery, all } from 'redux-saga/effects';
import CharacterActionTypes from '../actions/CharacterActionTypes.enum';

import {
  getCharactersFromApi,
  searchCharactersFromApi,
} from '../data/Api';

import {
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator
} from '../actions/CharacterActionCreators';

import {
  ISearchCharactersAction
} from '../actions/IGetCharactersActions.interface';


export function* getCharactersSaga() : any {
  try {
    const response = yield call(getCharactersFromApi);
    const characters = response.data.results;
    yield put(getCharactersSuccessActionCreator(characters))
  } catch(e) {
    yield put(getCharactersFailureActionCreator());
  }
}

export function* searchCharactersSaga(action: ISearchCharactersAction) : any {
  try {
    const response = yield call(searchCharactersFromApi, action.term);
    const characters = response.data.results;
    yield put(getCharactersSuccessActionCreator(characters))
  } catch(e) {
    yield put(getCharactersFailureActionCreator());
  }
};

export function* charactersSaga() {
  yield all([
    takeEvery(CharacterActionTypes.GET_CHARACTERS_START, getCharactersSaga),
    takeEvery(CharacterActionTypes.SEARCH_CHARACTERS, searchCharactersSaga)
  ]);
}
