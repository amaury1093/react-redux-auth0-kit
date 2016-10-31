import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from './Header'

describe('<Header />', () => {
  it('should render the correct title', () => {
    const wrapper = shallow(<Header isAuthenticated={false} onLoginClick={()=>{}} onLogoutClick={()=>{}} />)
    expect(wrapper.find('h1').text()).to.equal('React Redux Auth0 Kit')
  })
})