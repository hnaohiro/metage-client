import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Theme from '../theme'

class App extends Component {
  static get childContextTypes() {
    return { muiTheme: PropTypes.object.isRequired }
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(Theme) }
  }

  render() {
    const { value, actions } = this.props
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
