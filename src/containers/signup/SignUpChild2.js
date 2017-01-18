import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignUpChild2 extends Component {
  render() {
    return (
      <div>
        <h1>SignUpChild2ページです</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpChild2)
