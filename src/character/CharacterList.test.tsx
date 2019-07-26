import React from 'react';
import { shallow } from 'enzyme';

import { ICharacter } from './characterReducer';
import getCharactersResponse from './getCharactersMock';

import CharacterList from './CharacterList';
import CharacterListItem from './CharacterListItem';

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
    const characters: ICharacter[] = getCharactersResponse;
    const wrapper = shallow(<CharacterList characters={characters} />);
    const character: ICharacter = characters[0];

    describe('renders', () => {
      it('a list item per character', () => {
        const element = <CharacterListItem key={character.name} character={character} />;
        expect(wrapper.contains(element)).toEqual(true);
      });
    });    
  });
});
