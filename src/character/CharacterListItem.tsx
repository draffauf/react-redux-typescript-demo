import * as React from 'react';
import ICharacter from './data/ICharacter.interface';

// Create interface for Props
interface IProps {
  character: ICharacter;
}

const CharacterListItem: React.SFC<IProps> = props => {
  const { character } = props;

  return (
    <li key={character.name} className="list-group-item">
      {character.name}
    </li>
  );
};

export default CharacterListItem;
