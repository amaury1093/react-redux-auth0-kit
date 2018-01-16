import { authTypes, authActions } from '../';

describe('(Actions) auth', () => {
  it('should create an action for LOGIN_REQUEST', () => {
    const expectedAction = {
      type: authTypes.LOGIN_REQUEST
    };
    expect(authActions.loginRequest()).toEqual(expectedAction);
  });

  it('should create an action for LOGIN_SUCCESS', () => {
    const fakeProfile = { fakeProperty: 'fakeValue' };
    const expectedAction = {
      type: authTypes.LOGIN_SUCCESS,
      payload: { profile: fakeProfile }
    };
    expect(authActions.loginSuccess(fakeProfile)).toEqual(expectedAction);
  });

  it('should create an action for LOGIN_ERROR', () => {
    const fakeError = 'fakeError';
    const expectedAction = {
      type: authTypes.LOGIN_ERROR,
      error: fakeError
    };
    expect(authActions.loginError(fakeError)).toEqual(expectedAction);
  });

  it('should create an action for LOGOUT_SUCCESS', () => {
    const expectedAction = {
      type: authTypes.LOGOUT_SUCCESS
    };
    expect(authActions.logoutSuccess()).toEqual(expectedAction);
  });
});
