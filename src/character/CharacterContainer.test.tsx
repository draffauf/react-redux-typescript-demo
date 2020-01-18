import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Business domain imports
import GetCharactersMock from './data/GetCharactersMock';
import { CharacterContainer } from './CharacterContainer';
import ICharacter from './data/ICharacter.interface';
import CharacterList from './CharacterList';
import Loader from './Loader';

// Extract to helper?
interface renderElementParameters {
  getCharacters?: jest.Mock,
  searchCharacters?: jest.Mock,
  characters?: ICharacter[],
  isFetching?: Boolean,
}

const renderCharacterListContainer = ({
  getCharacters = jest.fn(),
  searchCharacters = jest.fn(),
  characters = [],
  isFetching = false,
} : renderElementParameters): ShallowWrapper => {
  return shallow(
    <CharacterContainer
      getCharacters={getCharacters}
      searchCharacters={searchCharacters}
      characters={characters}
      isFetching={isFetching}
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

  describe('without characters', () => {
    const characters: ICharacter[] = [];
    const getCharacters = jest.fn().mockResolvedValue(GetCharactersMock);
    mockUseEffect();
    renderCharacterListContainer({ characters, getCharacters });

    it('calls getCharacters', () => {
      expect(getCharacters).toHaveBeenCalledTimes(1);
    });
  });

  describe('with characters', () => {
    const characters: ICharacter[] = GetCharactersMock;
    const getCharacters = jest.fn().mockResolvedValue(GetCharactersMock);
    mockUseEffect();
    const wrapper = renderCharacterListContainer({
      characters,
      getCharacters
    });

    it('does not call getCharacters', () => {
      expect(getCharacters).not.toHaveBeenCalled();
    });

    it('a character container', () => {
      expect(wrapper.find('div.characters-container')).toHaveLength(1);
    });

    it('a character list', () => {
      const element = <CharacterList characters={characters} />;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
