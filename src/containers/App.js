import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Header from '../components/Header'
import * as CounterActions from '../actions/counter'


class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <Header />
        <h2>count={value}</h2>
        <RaisedButton label="INC" onClick={actions.increment} />
        <RaisedButton label="DEC" onClick={actions.decrement} />
      </div>
    )
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state.counter
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
