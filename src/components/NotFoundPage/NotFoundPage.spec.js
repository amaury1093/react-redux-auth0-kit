import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NotFoundPage from './NotFoundPage'

describe('(Component) <NotFoundPage />', () => {
  it('should render the correct page title', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper.find('h2').text()).to.equal('404')
  })
})