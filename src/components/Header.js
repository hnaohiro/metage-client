import React, { PropTypes, Component } from 'react'
import { AppBar } from 'material-ui'

export default class Header extends Component {
  static PropTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="header">
        <AppBar
          title={this.props.title}
          showMenuIconButton={false} />
      </header>
    )
  }
}
