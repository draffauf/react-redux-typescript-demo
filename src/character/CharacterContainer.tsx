import React from 'react';
import { connect } from 'react-redux';

import IAppState from '../store/IAppState.interface';
import ICharacter from './data/ICharacter.interface';
import {
  setCharacterActionCreator,
  getCharactersStartActionCreator,
  searchCharactersActionCreator
} from './actions/CharacterActionCreators';


import Character from './Character';
import CharacterList from './CharacterList';
import CharacterSearch from './CharacterSearch';
import NavigationBar from './NavigationBar';
import Loader from './Loader';


// Define available props
// TODO: use correct typing for getCharacters
interface IProps {
  setCharacter: Function,
  getCharacters: Function,
  searchCharacters: Function,
  character: any,
  characters: ICharacter[],
  isFetching: Boolean
}

// Define container with available props
export const CharacterContainer: React.SFC<IProps> = ({
  setCharacter,
  getCharacters,
  searchCharacters,
  character,
  characters,
  isFetching
}) => {
  // Workaround for Enyzme testing of useEffect, allows stubbing
  // See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
  React.useEffect(() => {
    if (characters.length === 0) {
      getCharacters();
    }
  });

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
    setCharacter: (character: any) => dispatch(setCharacterActionCreator(character)),
    getCharacters: () => dispatch(getCharactersStartActionCreator()),
    searchCharacters: (term: string) => dispatch(searchCharactersActionCreator(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
