import React from 'react'
import { expect } from 'chai'
import * as actions from './auth'

describe('(Actions) auth', () => {
  it('should create an action for LOGIN_REQUEST', () => {
    const expectedAction = {
      type: actions.LOGIN_REQUEST
    }
    expect(actions.loginRequest()).to.deep.equal(expectedAction)
  })

  // TODO: fake browserHistory first for this test to work
  // it('should create an action for LOGIN_SUCCESS', () => {
  //   const fakeProfile = { fakeProperty: 'fakeValue' }
  //   const expectedAction = {
  //     type: actions.LOGIN_SUCCESS,
  //     profile: fakeProfile
  //   }
  //   expect(actions.loginSuccess(fakeProfile)).to.deep.equal(expectedAction)
  // })

  it('should create an action for LOGIN_ERROR', () => {
    const fakeError = 'fakeError'
    const expectedAction = {
      type: actions.LOGIN_ERROR,
      error: fakeError
    }
    expect(actions.loginError(fakeError)).to.deep.equal(expectedAction)
  })

  // TODO: fake browserHistory first for this test to work
  // it('should create an action for LOGOUT_SUCCESS', () => {
  //   const expectedAction = {
  //     type: actions.LOGOUT_SUCCESS
  //   }
  //   expect(actions.logoutSuccess()).to.deep.equal(expectedAction)
  // })
})