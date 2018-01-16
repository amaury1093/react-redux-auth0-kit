import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './NotFoundPage';

describe('(Component) <NotFoundPage />', () => {
  it('should render the correct page title', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.find('h2').text()).toEqual('404');
  });
});
