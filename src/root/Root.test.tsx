import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';
import Root from './Root';
import configureStore from './Store';

describe('Root', () => {
  const store = configureStore();
  const wrapper = shallow(<Root store={store} />);

  describe('renders', () => {
    it('App', () => {
      const element = <App />;
      expect(wrapper.contains(element)).toEqual(true);
    });  
  });

  describe('properties', () => {
    it('store', () => expect(wrapper.props().store).toEqual(store));  
  });
});
