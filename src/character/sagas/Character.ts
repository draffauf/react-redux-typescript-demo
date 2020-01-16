import { call, put, takeEvery, all } from 'redux-saga/effects';
import CharacterActionTypes from '../actions/CharacterActionTypes.enum';
import { RestDataSource } from '../data/RestDataSource';

import {
  getCharactersSuccess,
  getCharactersFailure
} from '../actions/CharacterActionCreators';

import {
  ISearchCharactersAction,
  IGetCharactersStartAction
} from '../actions/IGetCharactersActions.interface';


function* getCharacters(action: IGetCharactersStartAction) : any {
  const dataSource: RestDataSource = new RestDataSource();

  try {
    const response = yield call(dataSource.getCharacters);
    const characters = response.data.results;
    yield put(getCharactersSuccess(characters))
  } catch(e) {
    yield put(getCharactersFailure());
  }
}

function* searchCharacters(action: ISearchCharactersAction) : any {
  const dataSource: RestDataSource = new RestDataSource();

  try {
    const response = yield call(dataSource.searchCharacters, action.term);
    const characters = response.data.results;
    yield put(getCharactersSuccess(characters))
  } catch(e) {
    yield put(getCharactersFailure());
  }
};

export default function* charactersSaga() {
  yield all([
    takeEvery(CharacterActionTypes.GET_CHARACTERS_START, getCharacters),
    takeEvery(CharacterActionTypes.SEARCH_CHARACTERS, searchCharacters)
  ]);
}
