import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import Content from '../../components/Content'
import * as MetageActions from '../../actions/metage'

class MetageForm extends Component {

  static PropTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { value, actions } = this.props
    return (
      <div>
        <Header title="metage" />
        <Content>
          <p>form</p>
        </Content>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.counter
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MetageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MetageForm)
