import * as React from 'react';

// Business domain imports
import CharacterListContainer from '../character/CharacterListContainer';

const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>The Force Awakens</h1>
      <CharacterListContainer />
    </>
  );
};

export default App;
