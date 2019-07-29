import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import App from './App';
import CharacterContainer from '../character/CharacterContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('CharacterContainer', () => {
      const element = <CharacterContainer />;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
