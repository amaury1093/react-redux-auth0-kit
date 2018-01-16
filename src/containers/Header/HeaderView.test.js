import React from 'react';
import { shallow } from 'enzyme';

import HeaderView from './HeaderView';

describe('(Component) <Header />', () => {
  it('should render the correct title', () => {
    const wrapper = shallow(
      <HeaderView
        authService={{}}
        history={{ push: () => null }}
        auth={{ isAuthenticated: false }}
        loginRequest={() => null}
        logoutSuccess={() => null}
      />
    );
    expect(wrapper.find('h1').text()).toEqual('React Redux Auth0 Kit');
  });
});
