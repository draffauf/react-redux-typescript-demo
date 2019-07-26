import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../root/Store';
import { ICharacter } from './characterReducer';
import { getCharacters } from './CharacterActions';
import CharacterList from './CharacterList';

// Create the containers interface
interface IProps {
  getCharacters: any;
  characters: ICharacter[];
}

export class CharacterListContainer extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  public render() {
    const { characters } = this.props;

    return (
      <div className="characters-container">
        <CharacterList characters={characters} />
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListContainer);
