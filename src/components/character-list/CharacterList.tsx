import * as React from 'react';
import { ICharacter } from '../../reducers/characterReducer';

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
          <li key={character.name} className="name">
            {character.name}
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterList;