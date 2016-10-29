import React from 'react'
import HeaderContainer from '../containers/HeaderContainer'

const App = ({ route, children }) =>
  <div>
    <HeaderContainer authService={route.authService}/>
    {children}
  </div>

App.propTypes = {
  route: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired
}

export default App
