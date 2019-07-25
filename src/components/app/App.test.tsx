import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders a heading', () => {
    const element = <h1>The Force Awakens</h1>;
    expect(wrapper.contains(element)).toEqual(true);
  });
});
