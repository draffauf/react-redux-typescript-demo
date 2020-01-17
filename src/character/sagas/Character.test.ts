// Libraries
import { call, put } from 'redux-saga/effects';

// App imports
import {
  searchCharactersActionCreator,
  getCharactersStartActionCreator,
  getCharactersSuccessActionCreator,
  getCharactersFailureActionCreator,
} from '../actions/CharacterActionCreators';

import GetCharactersMock from '../data/GetCharactersMock';

import {
  getCharactersFromApi,
  searchCharactersFromApi,
} from '../data/Api';

import {
  getCharactersSaga,
  searchCharactersSaga,
} from './Character';

// Tests
describe('getCharacters', () => {
  it('success triggers success action with characters', () => {
    const generator = getCharactersSaga();
    const response = { data: { results: GetCharactersMock } };

    expect(generator.next().value)
      .toEqual(call(getCharactersFromApi));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersSuccessActionCreator(GetCharactersMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const generator = getCharactersSaga();
    const response = {};

    expect(generator.next().value)
      .toEqual(call(getCharactersFromApi));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});

describe('searchCharacters', () => {
  it('success triggers success action with characters', () => {
    const term = 'Luke';
    const generator = searchCharactersSaga(searchCharactersActionCreator(term));
    const response = { data: { results: GetCharactersMock } };

    expect(generator.next().value)
      .toEqual(call(searchCharactersFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersSuccessActionCreator(GetCharactersMock)));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });

  it('failure triggers failure action', () => {
    const term = 'Luke';
    const generator = searchCharactersSaga(searchCharactersActionCreator(term));
    const response = {};

    expect(generator.next().value)
      .toEqual(call(searchCharactersFromApi, term));

    expect(generator.next(response).value)
      .toEqual(put(getCharactersFailureActionCreator()));

    expect(generator.next())
      .toEqual({ done: true, value: undefined });
  });
});
