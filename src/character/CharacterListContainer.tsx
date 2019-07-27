import * as React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import ICharacter from './ICharacter.interface';
import { getCharacters } from './CharacterActions';
import CharacterList from './CharacterList';

// Define available props
interface IProps {
  getCharacters: any;
  characters: ICharacter[];
}

// Define container with available props
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

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListContainer);
