import * as React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import ICharacter from './data/ICharacter.interface';
import {
  setCharacter,
  getCharacters,
  searchCharacters
} from './actions/CharacterActionCreators';
import Character from './Character';
import CharacterList from './CharacterList';
import { CharacterSearch } from './CharacterSearch';
import NavigationBar from './NavigationBar';
import Loader from './Loader';


// Define available props
// TODO: use correct typing for getCharacters
interface IProps {
  character: any,
  setCharacter: Function,
  getCharacters: Function,
  searchCharacters: Function,
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
      character,
      characters,
      setCharacter,
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
          <div className="row">
            <div className="col-sm">
              <CharacterList characters={characters} setCharacter={setCharacter} />
            </div>

            <div className="col-sm">
              <Character character={character} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

// Make data available on props
const mapStateToProps = (store: IAppState) => {
  return {
    character: store.characterState.character,
    characters: store.characterState.characters,
    isFetching: store.characterState.isFetching,
  };
};

// Make functions available on props
const mapDispatchToProps = (dispatch: any) => {
  return {
    setCharacter: (character: any) => dispatch(setCharacter(character)),
    getCharacters: () => dispatch(getCharacters()),
    searchCharacters: (term: String) => dispatch(searchCharacters(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
