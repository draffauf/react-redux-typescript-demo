// React related imports
import React from 'react';
import { shallow } from 'enzyme';

// App imports
import ICharacter from './ICharacter.interface';
import CharacterList from './CharacterList';
import { CharacterListContainer } from './CharacterListContainer';
import getCharactersMock from './getCharactersMock';

// Tests
describe('CharacterListContainer', () => {
  describe('without characters', () => {
    const characters: ICharacter[] = [];
    const mockGetCharactersFunction = jest.fn();
    const wrapper = shallow(<CharacterListContainer getCharacters={mockGetCharactersFunction} characters={characters} />);

    it('calls getCharacters', () => {
      expect(mockGetCharactersFunction.mock.calls.length).toBe(1)
    });
  });

  describe('with characters', () => {
    const characters: ICharacter[] = getCharactersMock;
    const mockGetCharactersFunction = jest.fn();
    const wrapper = shallow(<CharacterListContainer getCharacters={mockGetCharactersFunction} characters={characters} />);

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