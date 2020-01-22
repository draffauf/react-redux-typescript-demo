import * as React from 'react';

// Business domain imports
import ICharacter from './data/ICharacter.interface';
import CharacterListItem from './CharacterListItem';

interface IProps {
  setCharacter: Function,
  characters: ICharacter[];
}

const CharacterList: React.FunctionComponent<IProps> = ({ characters, setCharacter }) => (
  <ul className="list-group">
    {characters && characters.map(character => (
      <CharacterListItem
        key={character.name}
        character={character}
        setCharacter={setCharacter} />
    ))}
  </ul>
);

export default CharacterList;
