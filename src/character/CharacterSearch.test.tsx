import React from 'react';
import { mount } from 'enzyme';

import CharacterSearch from './CharacterSearch';

describe('CharacterSearch', () => {
  const searchCharacters = jest.fn();
  const wrapper = mount(<CharacterSearch searchCharacters={searchCharacters} />);

  describe('renders', () => {
    it('a form', () => {
      const form = wrapper.find('form');
      expect(form).toBeDefined();
    });

    it('handles submission', () => {
      const form = wrapper.find('form');
      const input = wrapper.find('input');
      const newValue = 'Ch-ch-changes';
      input.simulate('change', { target: { value: newValue } })
      form.simulate('submit');
      expect(searchCharacters).toHaveBeenCalledWith(newValue);
    });
  });
});
