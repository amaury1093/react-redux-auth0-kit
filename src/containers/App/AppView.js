import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
        return this.props.loginSuccess(profile)
      })
    })
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', (error) => this.props.loginError(error))
  }

  render() {
    return(
      <Router>
        <div>
          <HeaderContainer authService={this.authService} />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired
}

export default App
