import React from 'react';
import { mount } from 'enzyme';

import ICharacter from './data/ICharacter.interface';
import GetCharacterMock from './data/GetCharacterMock';
import Character from './Character';

describe('Character', () => {
  const character: ICharacter = GetCharacterMock;
  const wrapper = mount(<Character character={character} />);

  describe('renders', () => {
    it('a list item', () => {
      const character = wrapper.find('li')
      expect(character).toBeDefined();
    });

    it('handles submission', () => {
      const heading = wrapper.find('h2');
      expect(heading.text()).toEqual(character.name);
    });
  });
});
