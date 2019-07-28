import * as React from 'react';

// Business domain imports
import CharacterListContainer from '../character/CharacterListContainer';

const App: React.SFC<{}> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Star Wars Characters</a>
      </nav>

      <CharacterListContainer />
    </>
  );
};

export default App;
