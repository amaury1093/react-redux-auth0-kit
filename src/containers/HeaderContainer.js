import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
  const { isAuthenticated, profile } = state.auth
  return {
    authService: ownProps.authService,
    isAuthenticated,
    profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (authService) => dispatch(loginRequest(authService)),
    onLogoutClick: (authService) => dispatch(logoutSuccess(authService))
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
