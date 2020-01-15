import * as React from 'react';

import ICharacter from './data/ICharacter.interface';

// Create interface for Props
interface IProps {
  character: ICharacter
}

export class Character extends React.Component<IProps> {
  fallback() {
    return <h2>Select a Character</h2>;
  }

  render() {
    const { character } = this.props;

    if(!character) { return this.fallback() };

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
 };

export default Character;
