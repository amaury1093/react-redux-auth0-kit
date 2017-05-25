import { connect } from 'react-redux'
import { loginSuccess, loginError } from '../../actions'
import { withRouter } from 'react-router'

import AppView from './AppView'

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (profile) => dispatch(loginSuccess(profile)),
    loginError: (error) => dispatch(loginError(error))
  }
}

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(withRouter(AppView))

export default AppContainer
