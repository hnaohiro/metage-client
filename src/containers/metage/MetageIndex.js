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
import * as Actions from '../../actions/metage/index'

class MetageIndex extends Component {

  render() {
    return (
      <div>
        <Header title="metage" />
        <Content>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Segment</TableHeaderColumn>
                <TableHeaderColumn>Domains</TableHeaderColumn>
                <TableHeaderColumn></TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {this.props.entities.segments.map((row, index) => this.renderRow(row, index))}
            </TableBody>
          </Table>
        </Content>
      </div>
    )
  }

  renderRow(row, index) {
    return (
      <TableRow key={index} hoverable={true}>
        <TableRowColumn>{row.id}</TableRowColumn>
        <TableRowColumn>{row.name}</TableRowColumn>
        <TableRowColumn>{row.domains.length}</TableRowColumn>
        <TableRowColumn>
          <FlatButton
            label="Show"
            primary={true}
            onTouchTap={() => this.props.actions.openDialog(index)} />
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
        onTouchTap={() => this.props.actions.closeDialog()}
      />
    ]

    return (
      <Dialog
        title={this.props.entities.segments[index].name}
        actions={actions}
        modal={false}
        open={this.props.ui.open == index}
        onRequestClose={() => this.props.actions.closeDialog()}
        autoScrollBodyContent={true}
      >
        {this.props.entities.segments[index].domains.map((domain, i) =>
          <p key={i}>{domain}</p>
        )}
      </Dialog>
    )
  }
}

function mapStateToProps(state) {
  return state.metageIndex
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MetageIndex)
