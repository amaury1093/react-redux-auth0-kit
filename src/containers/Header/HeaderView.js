import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthService from '../../utils/AuthService';
import './Header.css';

const HeaderView = ({ authService, history, auth, loginRequest, logoutSuccess }) =>
  (<div>
    <h1>React Redux Auth0 Kit</h1>
    <ul className="list-inline">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    {auth.isAuthenticated ?
      <div>
        <img src={auth.profile.picture} height="40px" alt="profile" />
        <span>Welcome, {auth.profile.nickname}</span>
        <button
          onClick={() => {
            logoutSuccess();
            AuthService.logout(); // careful, this is a static method
            history.push({ pathname: '/' });
          }}
        >
          Logout
        </button>
      </div>
      :
      <button
        onClick={() => {
          authService.login();
          loginRequest();
        }}
      >
        Login
      </button>
    }
    {auth.error &&
      <p>{auth.error}</p>
    }
  </div>);

HeaderView.propTypes = {
  authService: PropTypes.object.isRequired, // eslint-disable-line
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    profile: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired,
};

export default HeaderView;
