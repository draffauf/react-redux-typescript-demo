import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';
import { ICharacter } from '../../reducers/characterReducer';
import getCharactersResponse from '../../fixtures/getCharactersResponse';

describe('CharacterList', () => {
  describe('without characters', () => {
    const characters: ICharacter[] = [];
    const wrapper = shallow(<CharacterList characters={characters} />);

    describe('renders', () => {
      it('empty undordered list', () => {
        const element = <ul></ul>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });
  });

  describe('with characters', () => {
    const wrapper = shallow(<CharacterList characters={getCharactersResponse} />);

    describe('renders', () => {
      it('a list item per character', () => {
        const element = <li className='name'>Luke Skywalker</li>;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });    
  });
});
