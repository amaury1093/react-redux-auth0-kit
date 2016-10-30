import React from 'react'
import HeaderContainer from '../../containers/HeaderContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.props.checkLogin()
  }

  render() {
    return(
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  checkLogin: React.PropTypes.func.isRequired
}

export default App
