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
import * as MetageActions from '../../actions/metage'

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
          <FlatButton label="Domain" primary={true} onTouchTap={() => this.props.actions.openDomainDialog(index)} />
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
        onTouchTap={() => this.props.actions.closeDomainDialog()}
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
        open={this.props.segments[index].open || false}
        onRequestClose={() => this.props.actions.closeDomainDialog()}
        autoScrollBodyContent={true}
      >
        {domains}
      </Dialog>
    )
  }
}

function mapStateToProps(state) {
  return state.metage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MetageActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MetageIndex)
