import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import AuthService from '../../utils/AuthService'
import './Header.css'

const Header = ({ authService, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
  <div>
    <h1>React Redux Auth0 Kit</h1>
    <ul className="list-inline">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    { !isAuthenticated ? (
      <button
        onClick={() => {
          authService.login()
          loginRequest()
        }}
      >
        Login
      </button>
    ) : (
      <div>
        <img src={profile.picture} height="40px" alt="profile" />
        <span>Welcome, {profile.nickname}</span>
        <button 
          onClick={() => {
            logoutSuccess()
            AuthService.logout() // careful, this is a static method
          }}
        >
          Logout
        </button>
      </div>
    )}
    { error &&
      <p>{error}</p>
    }
  </div>

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object,
  error: PropTypes.string,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired
}

export default Header
