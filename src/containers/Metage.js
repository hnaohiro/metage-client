import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Metage extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Metage)
