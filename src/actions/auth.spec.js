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

  // it('should create an action for LOGIN_SUCCESS', () => {
  //   const mockProfile = { mockProperty: 'mockValue' }
  //   const expectedAction = {
  //     type: actions.LOGIN_SUCCESS,
  //     profile: mockProfile
  //   }
  //   expect(actions.loginSuccess(mockProfile)).to.deep.equal(expectedAction)
  // })

  it('should create an action for LOGIN_ERROR', () => {
    const mockError = 'mockError'
    const expectedAction = {
      type: actions.LOGIN_ERROR,
      error: mockError
    }
    expect(actions.loginError(mockError)).to.deep.equal(expectedAction)
  })

  // it('should create an action for LOGOUT_SUCCESS', () => {
  //   const expectedAction = {
  //     type: actions.LOGOUT_SUCCESS
  //   }
  //   expect(actions.logoutSuccess()).to.deep.equal(expectedAction)
  // })
})