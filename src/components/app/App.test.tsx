import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CharacterList from '../character-list/CharacterListContainer';
import { ICharacter } from '../../reducers/characterReducer';

describe('App', () => {
  const wrapper = shallow(<App />);

  describe('renders', () => {
    it('CharacterList', () => {
      const element = <CharacterList />;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });
});
