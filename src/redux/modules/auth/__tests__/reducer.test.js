import authReducer, { authTypes } from '../';

require('jest-localstorage-mock'); // Provides a fake window.localStorage

describe('(Reducer) auth', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    });
  });

  it('should handle LOGIN_REQUEST', () => {
    expect(authReducer(undefined, { type: authTypes.LOGIN_REQUEST })).toEqual({
      isAuthenticated: false,
      isFetching: true,
      profile: {},
      error: null
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      authReducer(undefined, {
        type: authTypes.LOGIN_SUCCESS,
        payload: { profile: { fakeProperty: 'fakeValue' } }
      })
    ).toEqual({
      isAuthenticated: true,
      isFetching: false,
      profile: { fakeProperty: 'fakeValue' },
      error: null
    });
  });

  it('should handle LOGIN_ERROR', () => {
    expect(
      authReducer(undefined, {
        type: authTypes.LOGIN_ERROR,
        error: 'fakeError'
      })
    ).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: 'fakeError'
    });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(
      authReducer(undefined, {
        type: authTypes.LOGOUT_SUCCESS,
        error: 'fakeError'
      })
    ).toEqual({
      isAuthenticated: false,
      isFetching: false,
      profile: {},
      error: null
    });
  });
});
