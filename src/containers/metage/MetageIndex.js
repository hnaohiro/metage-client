import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Dialog from 'material-ui/Dialog'

import Header from '../../components/Header'
import Content from '../../components/Content'
import * as CounterActions from '../../actions/counter'

const styles = {
  rowButton: {
    padding: '0 6px'
  }
}

class MetageIndex extends Component {

  static PropTypes = {
    segments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      open: this.props.segments.map(() => false)
    }
  }

  render() {
    return (
      <div>
        <Header title="metage" />
        <Content>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Domain</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {this.props.segments.map((row, index) => this.renderRow(row, index))}
            </TableBody>
          </Table>
        </Content>
      </div>
    )
  }

  renderRow(row, index) {
    return (
      <TableRow hoverable={true} key={index}>
        <TableRowColumn>{row.id}</TableRowColumn>
        <TableRowColumn>{row.name}</TableRowColumn>
        <TableRowColumn style={styles.rowButton}>
          <FlatButton label="Domain" primary={true} onTouchTap={() => this.handleOpen(index)} />
          {this.renderDialog(index)}
        </TableRowColumn>
      </TableRow>
    )
  }

  renderDialog(index) {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />
    ]

    const domains = this.props.segments[index].domains.map((domain, i) =>
      <p key={i}>{domain}</p>
    )

    return (
      <Dialog
        title={this.props.segments[index].name}
        actions={actions}
        modal={false}
        open={this.state.open[index]}
        onRequestClose={() => this.handleClose()}
        autoScrollBodyContent={true}
      >
        {domains}
      </Dialog>
    )
  }

  handleOpen(index) {
    const newState = this.state.open.map((v, i) => i == index)
    this.setState({ open: newState })
  }

  handleClose() {
    const newState = this.state.open.map(() => false)
    this.setState({ open: newState })
  }
}

function mapStateToProps(state) {
  return state.metage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MetageIndex)
