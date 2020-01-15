import * as React from 'react';

import ICharacter from './data/ICharacter.interface';

// Create interface for Props
interface IProps {
  character: ICharacter,
  setCharacter: any,
}

export class CharacterListItem extends React.Component<IProps> {
  _onClickHandler = (event: React.MouseEvent) => {
    const { character, setCharacter } = this.props;
    event.preventDefault();
    setCharacter(character);
  }

  render() {
    const { character } = this.props;
    return (
      <li
        key={character.name}
        className="list-group-item"
        onClick={this._onClickHandler}>
        {character.name}
      </li>
    );
  }
};

export default CharacterListItem;
