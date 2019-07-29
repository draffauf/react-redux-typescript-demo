import * as React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import ICharacter from './data/ICharacter.interface';
import {
  getCharacters,
  searchCharacters
} from './actions/CharacterActionCreators';
import CharacterList from './CharacterList';
import { CharacterSearch } from './CharacterSearch';
import NavigationBar from './NavigationBar';
import Loader from './Loader';


// Define available props
// TODO: use correct typing for getCharacters
interface IProps {
  getCharacters: any,
  searchCharacters: any,
  characters: ICharacter[],
  isFetching: Boolean
}

// Define container with available props
export class CharacterContainer extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.getCharacters();
    }
  }

  public render() {
    const {
      characters,
      searchCharacters,
      isFetching
    } = this.props;

    return (
      <div className="characters-container">
        <NavigationBar>
          <CharacterSearch searchCharacters={searchCharacters} />
        </NavigationBar>

        { isFetching ? (
          <Loader></Loader>
        ) : (
          <CharacterList characters={characters} />
        )}
      </div>
    );
  }
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    characters: store.characterState.characters,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    getCharacters: () => dispatch(getCharacters()),
    searchCharacters: (term: String) => dispatch(searchCharacters(term)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
