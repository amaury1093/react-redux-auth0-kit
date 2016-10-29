import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'

import { loginSuccess, loginError } from '../actions'
// import LogoImg from 'images/test-icon.png';

export class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/callback',
        responseType: 'token'
      }
      // theme: {
      //   logo: LogoImg,
      //   primaryColor: "#b81b1c"
      // },
      // languageDictionary: {
      //   title: "My Company"
      // }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  //
  // Methods
  // -----------------------------------------------------------------------------
  _doAuthentication(authResult) {
    // Saves the user token
    AuthService.setToken(authResult.idToken)
    // navigate to the home route
    // browserHistory.replace('/#/home')
    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        // configure externally a function to fire, here it would be store.dispatch(loginError(error))
        this.authorizationErrorExternal(error)
        //
      } else {
        AuthService.setProfile(profile)
        // configure externally a function to fire, here it would be store.dispatch(loginSuccess(profile))
        this.doAuthenticationExternal(profile)
      }
    })
  }

  _authorizationError(error){
    // configure externally a function to fire, here it would be store.dispatch(loginError(error))
    this.authorizationErrorExternal(error)
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }

  //
  // Static methods
  // -----------------------------------------------------------------------------
  static checkTokenExpiry() {
    let jwt = localStorage.getItem('id_token')
    if(jwt) {
      let jwtExp = jwtDecode(jwt).exp
      let expiryDate = new Date(0)
      expiryDate.setUTCSeconds(jwtExp)

      if(new Date() < expiryDate) {
        return true
      }
    }
    return false
  }

  static getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  static loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = AuthService.getToken()
    return !!token && !AuthService.isTokenExpired(token)
  }

  static setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
  }

  // getProfile(){
  //   // Retrieves the profile data from localStorage
  //   const profile = localStorage.getItem('profile')
  //   return profile ? JSON.parse(localStorage.profile) : {}
  // }

  static setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  static getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  static getTokenExpirationDate() {
    const token = AuthService.getToken()
    const decoded = jwtDecode(token)
    if(!decoded.exp) {
      return null
    }

    const date = new Date(0) // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp)
    return date
  }

  static isTokenExpired() {
    const token = AuthService.getToken()
    const date = AuthService.getTokenExpirationDate(token)
    const offsetSeconds = 0
    if (date === null) {
      return false
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
}

export default function createAuthService(store) {
  let auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN)
  auth.doAuthenticationExternal = (profile) => store.dispatch(loginSuccess(profile))
  auth.authorizationErrorExternal = (error) => store.dispatch(loginError(error))
  return auth
}