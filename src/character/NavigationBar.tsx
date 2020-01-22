import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
}

const NavigationBar: React.FunctionComponent<IProps> = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Star Wars Characters</span>
    { children }
  </nav>
);

export default NavigationBar;
