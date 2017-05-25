import { connect } from 'react-redux'
import { loginSuccess, loginError } from '../../actions'
import AppView from './AppView'

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: () => dispatch(loginSuccess()),
    loginError: () => dispatch(loginError())
  }
}

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(AppView)

export default AppContainer
