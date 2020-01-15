import * as React from 'react';

// Business domain imports
import ICharacter from './data/ICharacter.interface';
import CharacterListItem from './CharacterListItem';

// Create interface for Props
interface IProps {
  setCharacter: any,
  characters: ICharacter[];
}

const CharacterList: React.SFC<IProps> = props => {
  const {
    setCharacter,
    characters
  } = props;

  return (
    <ul className="list-group">
      {characters && characters.map(character => {
        return (
          <CharacterListItem key={character.name} character={character} setCharacter={setCharacter} />
        );
      })}
    </ul>
  );
};

export default CharacterList;
