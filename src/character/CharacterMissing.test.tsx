import React from 'react';
import { mount } from 'enzyme';

import CharacterMissing from './CharacterMissing';

describe('CharacterMissing', () => {
  const wrapper = mount(<CharacterMissing />);

  describe('renders', () => {
    it('a heading', () => {
      const character = wrapper.find('h2')
      expect(character.text()).toEqual('Select a Character');
    });
  });
});
