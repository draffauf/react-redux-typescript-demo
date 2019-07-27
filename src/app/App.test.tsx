import React from 'react';
import { shallow } from 'enzyme';

// Business domain imports
import App from './App';
import CharacterList from '../character/CharacterListContainer';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('CharacterList', () => {
      const element = <CharacterList />;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
