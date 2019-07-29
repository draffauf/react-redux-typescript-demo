import React from 'react';
import { mount } from 'enzyme';

import { CharacterSearch } from './CharacterSearch';

describe('CharacterSearch', () => {
  const searchCharacters = jest.fn();
  const wrapper = mount(<CharacterSearch searchCharacters={searchCharacters} />);

  describe('renders', () => {
    it('a form', () => {
      const form = wrapper.find('form');
      expect(form).toBeDefined();
    });

    it('handles input change', () => {
      const initialValue = '';
      const newValue = 'Ch-ch-changes';
      const input = wrapper.find('input');
      expect(wrapper.state('value')).toEqual(initialValue);
      input.simulate('change', { target: { value: newValue } })
      expect(wrapper.state('value')).toEqual(newValue);
    });

    it('handles submission', () => {
      const form = wrapper.find('form');
      form.simulate('submit');
      expect(searchCharacters).toHaveBeenCalledTimes(1);
    });
  });
});
