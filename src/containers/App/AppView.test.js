import React from 'react';
import { shallow } from 'enzyme';

import AppView from './AppView';
import Header from '../Header/Header';

describe('(Component) <App />', () => {
  it('should render a header container', () => {
    const wrapper = shallow(
      <AppView
        loginSuccess={() => null}
        loginError={() => null}
        history={{ push: () => null }}
      />
    );
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
