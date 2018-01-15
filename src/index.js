import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './redux/configureStore';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
