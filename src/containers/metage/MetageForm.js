import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

import Header from '../../components/Header'
import Content from '../../components/Content'
import * as Actions from '../../actions/metage/form'

class MetageForm extends Component {

  render() {
    return (
      <div>
        <Header title="metage" />
        {this.renderToolBar()}
        <Content>
          <Table>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
              {this.props.form.domains.map((row, index) =>
                <TableRow key={index} hoverable={true}>
                  <TableRowColumn>{row}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Content>
      </div>
    )
  }

  renderToolBar() {
    const text = `${(this.props.form.domains || []).length} domains`

    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text={text} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton
            label="Add Domain"
            primary={true}
            onTouchTap={() => this.props.actions.openDialog()} />
          {this.renderDialog()}
          <ToolbarSeparator />
          <FlatButton label="Save" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    )
  }

  renderDialog() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        disabled={this.props.ui.keyword == ''}
        onTouchTap={() => this.props.actions.requestDomains()}
      />,
    ]

    return (
      <div>
        <Dialog
          title="Add Domain"
          actions={actions}
          modal={false}
          open={this.props.ui.open || false}
          autoScrollBodyContent={true}
          onRequestClose={() => this.props.actions.closeDialog()}
        >
          <p>Input a keyword</p>
          <TextField
            hintText="keyword"
            defaultValue={this.props.ui.keyword}
            onChange={(e, value) => this.props.actions.changeKeyword(value)}
          />
        </Dialog>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.metageForm
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MetageForm)
