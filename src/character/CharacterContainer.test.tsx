import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Business domain imports
import GetCharacterMock from './data/GetCharactersMock';
import GetCharactersMock from './data/GetCharactersMock';
import { CharacterContainer } from './CharacterContainer';
import ICharacter from './data/ICharacter.interface';
import Loader from './Loader';

// Extract to helper?
interface renderElementParameters {
  getCharacters: jest.Mock,
  searchCharacters: jest.Mock,
  setCharacter: jest.Mock,
  character: ICharacter,
  characters: ICharacter[],
  isFetching: Boolean,
}

const defaultProps:renderElementParameters  = {
  getCharacters: jest.fn(),
  setCharacter: jest.fn(),
  searchCharacters: jest.fn(),
  characters: [],
  character: GetCharacterMock,
  isFetching: false,
}

const renderCharacterListContainer = (overrides: any): ShallowWrapper => {
  return shallow(
    <CharacterContainer
      {...defaultProps}
      {...overrides}
    />
  );
}

// Workaround for Enyzme testing of useEffect
// See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
const mockUseEffect = (): jest.SpyInstance => {
  return jest.spyOn(React, 'useEffect').mockImplementation(f => f());
}

// Tests
describe('CharacterListContainer', () => {
  describe('when fetching', () => {
    const wrapper = renderCharacterListContainer({ isFetching: true });

    it('display "Loader"', () => {
      const element = <Loader />;

      expect(wrapper.contains(element)).toBe(true);
    });
  });

  describe('on initial render', () => {
    const characters: ICharacter[] = [];
    const getCharacters = jest.fn().mockResolvedValue(GetCharactersMock);
    mockUseEffect();
    const wrapper = renderCharacterListContainer({ characters, getCharacters });

    it('calls getCharacters', () => {
      expect(getCharacters).toHaveBeenCalledTimes(1);
    });

    it('a character container', () => {
      expect(wrapper.find('div.characters-container')).toHaveLength(1);
    });
  });
});
