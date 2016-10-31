import { connect } from 'react-redux'
import { checkLogin } from '../../actions'
import { App } from '../../components'

const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: () => dispatch(checkLogin())
  }
}

const AppContainer = connect(
  null, // no mapStateToProps
  mapDispatchToProps
)(App)

export default AppContainer
