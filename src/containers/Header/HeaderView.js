import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ isAuthenticated, profile, error, onLoginClick, onLogoutClick }) =>
  <div>
    <h1>React Redux Auth0 Kit</h1>
    <ul className="list-inline">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    { !isAuthenticated ? (
      <button onClick={this.props.loginRequest}>Login</button>
    ) : (
      <div>
        <img src={profile.picture} height="40px" />
        <span>Welcome, {profile.nickname}</span>
        <button onClick={this.props.logoutSuccess}>Logout</button>
      </div>
    )}
    { error &&
      <p>{error}</p>
    }
  </div>

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  error: React.PropTypes.string,
  loginRequest: React.PropTypes.func.isRequired,
  logoutSuccess: React.PropTypes.func.isRequired
}

export default Header
