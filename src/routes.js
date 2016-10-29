import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

import createAuthService from './utils/AuthService'

export default function createRoutes(store) {
  // create an auth service that will be passed down to all components
  const authService = createAuthService(store)
  
  return(
    <Route path='/' component={App} authService={authService}>
      <IndexRoute component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='*' component={NotFoundPage} />
    </Route>
  )
}
