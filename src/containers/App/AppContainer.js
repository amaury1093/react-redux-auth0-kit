import { connect } from 'react-redux';
import { loginSuccess, loginError } from '../../actions';
import { withRouter } from 'react-router';

import AppView from './AppView';

const mapDispatchToProps = dispatch => ({
  loginSuccess: profile => dispatch(loginSuccess(profile)),
  loginError: error => dispatch(loginError(error)),
});

const AppContainer = withRouter(connect(
  null, // no mapStateToProps
  mapDispatchToProps,
)(AppView));

export default AppContainer;
