import React from 'react';
import { shallow } from 'enzyme';

import { ICharacter } from './characterReducer';
import getCharactersResponse from './getCharactersMock';

import CharacterListItem from './CharacterListItem';

describe('CharacterListItem', () => {
  const character: ICharacter = getCharactersResponse[0];
  const wrapper = shallow(<CharacterListItem key={character.name} character={character} />);

  describe('renders', () => {
    it('a list item', () => {
      const element = <li key='Luke Skywalker' className='name'>Luke Skywalker</li>;
      expect(wrapper.contains(element)).toEqual(true);
    });
  });    
});
