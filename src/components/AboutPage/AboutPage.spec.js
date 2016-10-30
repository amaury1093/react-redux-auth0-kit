import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from './components';

describe('BeerListContainer', () => {
  it('should render a header', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <Header />
    ])).to.equal(true);
  });
});