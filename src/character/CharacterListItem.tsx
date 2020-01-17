import * as React from 'react';

import ICharacter from './data/ICharacter.interface';

// Create interface for Props
interface IProps {
  character: ICharacter,
  setCharacter: any,
}

const CharacterListItem: React.SFC<IProps> = ({ character, setCharacter }: IProps) => {
  const _onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCharacter(character);
  }

  return (
    <li
      key={character.name}
      className="list-group-item"
      onClick={_onClickHandler}>
      {character.name}
    </li>
  );
};

export default CharacterListItem;
