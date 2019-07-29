import * as React from 'react';

interface IProps {}

const NavigationBar: React.SFC<IProps> = ({ children }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Star Wars Characters</span>
      { children }
    </nav>
  );
};

export default NavigationBar;
