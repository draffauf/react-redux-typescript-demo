import React from 'react';
import { shallow } from 'enzyme';

import Loader from './Loader';

describe('CharacterListItem', () => {
  const wrapper = shallow(<Loader />);

  describe('renders', () => {
    it('loading text', () => {
      expect(wrapper.contains('Loading')).toBe(true);
    });
  });
});
