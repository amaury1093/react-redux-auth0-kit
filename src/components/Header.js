import React from 'react'
import { Link } from 'react-router'

const Header = ({ isAuthenticated, profile, authService, onLoginClick, onLogoutClick }) =>
  <div>
    <h1>Timesd</h1>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    { !isAuthenticated ? (
      <button onClick={() => onLoginClick(authService)}>Login</button>
    ) : (
      <div>
        <img src={profile.picture} height="40px" />
        <span>Welcome, {profile.nickname}</span>
        <button onClick={() => onLogoutClick(authService)}>Logout</button>
      </div>
    )}
  </div>

Header.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  profile: React.PropTypes.object,
  authService: React.PropTypes.object.isRequired,
  onLoginClick: React.PropTypes.func.isRequired,
  onLogoutClick: React.PropTypes.func.isRequired
}

export default Header
