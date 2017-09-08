import { expect } from 'chai';
import { authTypes, authActions } from '../../../../src/redux/modules/auth';

describe('(Actions) auth', () => {
  it('should create an action for LOGIN_REQUEST', () => {
    const expectedAction = {
      type: authTypes.LOGIN_REQUEST,
    };
    expect(authActions.loginRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action for LOGIN_SUCCESS', () => {
    const fakeProfile = { fakeProperty: 'fakeValue' }
    const expectedAction = {
      type: authTypes.LOGIN_SUCCESS,
      profile: fakeProfile,
    }
    expect(authActions.loginSuccess(fakeProfile)).to.deep.equal(expectedAction)
  })

  it('should create an action for LOGIN_ERROR', () => {
    const fakeError = 'fakeError';
    const expectedAction = {
      type: authTypes.LOGIN_ERROR,
      error: fakeError,
    };
    expect(authActions.loginError(fakeError)).to.deep.equal(expectedAction);
  });


  it('should create an action for LOGOUT_SUCCESS', () => {
    const expectedAction = {
      type: authTypes.LOGOUT_SUCCESS,
    }
    expect(authActions.logoutSuccess()).to.deep.equal(expectedAction)
  });
});
