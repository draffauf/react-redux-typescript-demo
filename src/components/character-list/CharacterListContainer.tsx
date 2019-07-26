import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../store/Store';
import { ICharacter } from '../../reducers/characterReducer';
import { getAllCharacters } from '../../actions/CharacterActions';
import CharacterList from './CharacterList';

// Create the containers interface
interface IProps {
  getAllCharacters: any;
  characters: ICharacter[];
}

class CharacterListContainer extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getAllCharacters();
    }
  }

  public render() {
    const { characters } = this.props;

    return (
      <div className="name-container">
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
    getAllCharacters: () => dispatch(getAllCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListContainer);
