import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AboutPage from './AboutPage'

describe('(Component) <AboutPage />', () => {
  it('should render the correct page title', () => {
    const wrapper = shallow(<AboutPage />)
    expect(wrapper.find('h2').text()).to.equal('About')
  })

  it('should render a <p> with correct text', () => {
    const wrapper = shallow(<AboutPage />)
    expect(wrapper.find('p').text()).to.equal('Some info about React Redux Auth0 Kit.')
  })
})