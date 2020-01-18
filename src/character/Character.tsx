import * as React from 'react';

import ICharacter from './data/ICharacter.interface';

interface IProps {
  character: ICharacter
}

const Character: React.SFC<IProps> = ({ character }: IProps) => (
  <>
    <h2>{character.name}</h2>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Info</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Height</th>
          <td>{character.height}</td>
        </tr>
        <tr>
          <th scope="row">Mass</th>
          <td>{character.mass}</td>
        </tr>
      </tbody>
    </table>
  </>
)

export default Character;
