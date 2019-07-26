import * as React from 'react';
import { ICharacter } from './characterReducer';
import CharacterListItem from './CharacterListItem';

// Create interface for Props
interface IProps {
  characters: ICharacter[];
}

const CharacterList: React.SFC<IProps> = props => {
  const { characters } = props;

  return (
    <ul>
      {characters && characters.map(character => {
        return (
          <CharacterListItem key={character.name} character={character} />
        );
      })}
    </ul>
  );
};

export default CharacterList;