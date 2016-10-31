import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'

// import LogoImg from 'images/test-icon.png';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0 lock
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/callback',
        responseType: 'token'
      },
      // theme: {
      //   logo: LogoImg,
      //   primaryColor: "#b81b1c"
      // },
      languageDictionary: {
        title: 'React Redux Auth0 Kit'
      }
    })
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  // ======================================================
  // Public methods
  // ======================================================
  login() {
    // Call the show method to display the widget.
    this.lock.show()
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
  }

  // ======================================================
  // Static methods
  // ======================================================
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
    if (!token) return true
    const date = AuthService.getTokenExpirationDate(token)
    const offsetSeconds = 0
    if (date === null) {
      return false
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
  }
}
