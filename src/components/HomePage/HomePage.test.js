import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

describe('(Component) <HomePage />', () => {
  it('should render the correct page title', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('h2').text()).toEqual('Homepage');
  });
});
