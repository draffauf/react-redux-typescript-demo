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
import CharacterMissing from './CharacterMissing';
import CharacterSearch from './CharacterSearch';
import Loader from './Loader';
import NavigationBar from './NavigationBar';

interface IProps {
  getCharacters: Function,
  setCharacter: Function,
  searchCharacters: Function,
  character: any,
  characters: ICharacter[],
  isFetching: Boolean
}

// Note: This is mainly done to enable testing
export const CharacterContainer: React.SFC<IProps> = ({
  getCharacters,
  setCharacter,
  searchCharacters,
  character,
  characters,
  isFetching
}) => {
  // Workaround for Enyzme testing of useEffect, allows stubbing
  // See: https://blog.carbonfive.com/2019/08/05/shallow-testing-hooks-with-enzyme/
  React.useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div className="characters-container">
      <NavigationBar>
        <CharacterSearch searchCharacters={searchCharacters} />
      </NavigationBar>

      { isFetching
        ? <Loader></Loader>
        : (
          <div className="row">
            <div className="col-sm">
              <CharacterList
                characters={characters}
                setCharacter={setCharacter} />
            </div>

            <div className="col-sm">
              {character
                ? <Character character={character} />
                : <CharacterMissing />}
            </div>
          </div>
        )
      }
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
    getCharacters: () => dispatch(getCharactersStartActionCreator()),
    setCharacter: (character: any) => dispatch(setCharacterActionCreator(character)),
    searchCharacters: (term: string) => dispatch(searchCharactersActionCreator(term)),
  }
}

// Connect the app aware container to the store and reducers
export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
