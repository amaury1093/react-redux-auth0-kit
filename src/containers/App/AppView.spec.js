import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import AppView from './AppView'
import HeaderContainer from '../Header/HeaderContainer'

describe('(Component) <App />', () => {
  it('should render a header container', () => {
    const wrapper = shallow(<AppView loginSuccess={() => {}} loginError={() => {}} history={{ push: () => {} }}/>)
    expect(wrapper.find(HeaderContainer)).to.have.length(1)
  })
})