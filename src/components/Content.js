import React, { PropTypes, Component } from 'react'
import { AppBar,IconButton  } from 'material-ui'

const styles = {
  padding: '10px 20px'
}

export default class Content extends Component {
  render() {
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    )
  }
}
