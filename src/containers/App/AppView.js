import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import HeaderContainer from '../Header/HeaderContainer'
import HomePage from '../../components/HomePage/HomePage'
import AboutPage from '../../components/AboutPage/AboutPage'
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage'
import AuthService from '../../utils/AuthService'

class App extends React.Component {

  authService = new AuthService()

  componentWillMount() {
    // Add callback for lock's `authenticated` event
    this.authService.lock.on('authenticated', (authResult) => {
      this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error)
          return this.props.loginError(error)
        AuthService.setToken(authResult.idToken) // static method
        AuthService.setProfile(profile) // static method
        this.props.loginSuccess(profile)
        return this.props.history.push({ pathname: '/' })
      })
    })
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', (error) => {
      this.props.loginError(error)
      return this.props.history.push({ pathname: '/' })
    })
  }

  render() {
    return(
      <div>
        <HeaderContainer authService={this.authService} />
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired
}

export default App
