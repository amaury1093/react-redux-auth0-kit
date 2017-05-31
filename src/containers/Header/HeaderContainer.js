import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../../actions'
import { withRouter } from 'react-router'

import HeaderView from './HeaderView'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest()),
    logoutSuccess: () => dispatch(logoutSuccess())
  }
}

const HeaderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView))

export default HeaderContainer
