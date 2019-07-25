import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { ICharacter } from '../reducers/characterReducer';

// Create the containers interface
interface IProps {
  characters: ICharacter[];
}

class CharacterList extends React.Component<IProps> {
  public render() {
    const { characters } = this.props;
    return (
      <div className="name-container">
        <ul>
          {characters && characters.map(character => {
            return (
              <li key={character.name} className="name">
                <span>{character.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
  };
};

export default connect(mapStateToProps)(CharacterList);
