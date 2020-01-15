import React from 'react';
import { mount } from 'enzyme';

import ICharacter from './data/ICharacter.interface';
import GetCharacterMock from './data/GetCharacterMock';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem', () => {
  const setCharacter = jest.fn();
  const character: ICharacter = GetCharacterMock;
  const wrapper = mount(<CharacterListItem key={character.name} character={character} setCharacter={setCharacter} />);

  describe('renders', () => {
    it('a list item', () => {
      const character = wrapper.find('li')
      expect(character).toBeDefined();
    });

    it('handles submission', () => {
      const character = wrapper.find('li');
      character.simulate('click');
      expect(setCharacter).toHaveBeenCalledTimes(1);
    });

  });
});
