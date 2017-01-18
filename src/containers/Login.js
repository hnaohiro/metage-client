import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>ログインページです</h1>
        <h2>↓Linkを使う方法</h2>
        <Link to="home">HOMEへ</Link><br /><br />
        <RaisedButton label="HOMEへ" containerElement={<Link to="home" />}/>
        <h2>↓browserHistoryを使う方法</h2>
        <RaisedButton label="HOMEへ" onTouchTap={() => {browserHistory.push("home")}} primary={true}/>
        <br /><br />
        <RaisedButton label="Counter" onTouchTap={() => {browserHistory.push("counter")}} secondary={true}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
