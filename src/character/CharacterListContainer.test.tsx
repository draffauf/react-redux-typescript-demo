import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Business domain imports
import ICharacter from './ICharacter.interface';
import CharacterList from './CharacterList';
import { CharacterListContainer } from './CharacterListContainer';
import getCharactersMock from './getCharactersMock';

// Extract to helper?
interface renderElementParameters {
  characters?: ICharacter[],
  mockGetCharactersFunction?: jest.Mock,
  isFetching?: Boolean,
}

const renderCharacterListContainer = ({
  characters = [],
  mockGetCharactersFunction = jest.fn(),
  isFetching = false,
} : renderElementParameters): ShallowWrapper => {
  return shallow(
    <CharacterListContainer
      getCharacters={mockGetCharactersFunction}
      characters={characters}
      isFetching={isFetching}
    />
  );
}

// Tests
describe('CharacterListContainer', () => {
  describe('when fetching', () => {
    const wrapper = renderCharacterListContainer({ isFetching: true });

    it('display "Loading"', () => {
      expect(wrapper.contains('Loading')).toBe(true);
    });
  });

  describe('without characters', () => {
    const mockGetCharactersFunction = jest.fn();
    const wrapper = renderCharacterListContainer({ mockGetCharactersFunction });

    it('calls getCharacters', () => {
      expect(mockGetCharactersFunction.mock.calls.length).toBe(1)
    });
  });

  describe('with characters', () => {
    const characters: ICharacter[] = getCharactersMock;
    const mockGetCharactersFunction = jest.fn();
    const wrapper = renderCharacterListContainer({
      characters,
      mockGetCharactersFunction
    });

    it('does not call getCharacters', () => {
      expect(mockGetCharactersFunction.mock.calls.length).toBe(0)
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
