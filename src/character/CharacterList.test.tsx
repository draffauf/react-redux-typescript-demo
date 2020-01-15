import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import ICharacter from './data/ICharacter.interface';
import GetCharactersMock from './data/GetCharactersMock';
import CharacterList from './CharacterList';

describe('CharacterList', () => {
  const setCharacter = jest.fn();

  describe('without characters', () => {
    const characters: ICharacter[] = [];
    const wrapper = shallow(<CharacterList characters={characters} setCharacter={setCharacter} />);

    describe('renders', () => {
      it('empty undordered list', () => {
        const element = <ul className="list-group"></ul>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });

  describe('with characters', () => {
    const characters: ICharacter[] = GetCharactersMock;
    const wrapper = shallow(<CharacterList characters={characters} setCharacter={setCharacter} />);
    const character: ICharacter = characters[0];

    describe('renders', () => {
      it('a list item per character', () => {
        const character = wrapper.find('li');
        expect(character).toBeDefined();
      });
    });
  });
});
