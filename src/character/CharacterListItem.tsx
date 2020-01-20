import * as React from 'react';

import ICharacter from './data/ICharacter.interface';

interface IProps {
  character: ICharacter,
  setCharacter: Function,
}

const CharacterListItem: React.SFC<IProps> = ({ character, setCharacter }: IProps) => {
  const onClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    setCharacter(character);
  }

  return (
    <li
      key={character.name}
      className="list-group-item"
      onClick={onClickHandler}>
      {character.name}
    </li>
  );
};

export default CharacterListItem;
