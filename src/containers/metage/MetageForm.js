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
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress'

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
    const domains = this.props.form.domains || []
    const text = (this.props.form.name) ?
      `${this.props.form.name} - ${domains.length} domains` :
      `${domains.length} domains`

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
          <FlatButton
            label="Save"
            primary={true}
            onTouchTap={() => this.props.actions.openSaveDialog()} />
          {this.renderSaveDialog()}
        </ToolbarGroup>
      </Toolbar>
    )
  }

  renderDialog() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        disabled={this.props.request.waiting}
        onTouchTap={() => this.props.actions.closeDialog()}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        disabled={this.props.request.waiting || this.props.ui.keyword == ''}
        onTouchTap={() => this.props.actions.fetchDomains()}
      />
    ]

    return (
      <Dialog
        title="Add Domain"
        actions={actions}
        modal={true}
        open={this.props.ui.open}
        onRequestClose={() => this.props.actions.closeDialog()}
      >
        {(() => {
          if (this.props.request.waiting) {
            return (
              <div>
                <CircularProgress size={60} thickness={7} />
              </div>
            )
          } else {
            return (
              <div>
                <p>Input a keyword</p>
                <TextField
                  hintText="keyword"
                  defaultValue={this.props.ui.keyword}
                  onChange={(e, value) => this.props.actions.changeKeyword(value)}
                />
              </div>
            )
          }
        })()}
      </Dialog>
    )
  }

  renderSaveDialog() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        disabled={this.props.request.waiting}
        onTouchTap={() => this.props.actions.closeSaveDialog()}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        disabled={this.props.request.waiting || (this.props.form.name == '')}
        onTouchTap={() => this.props.actions.postSegment()}
      />
    ]

    return (
      <Dialog
        title="Save"
        actions={actions}
        modal={true}
        open={this.props.ui.openSaveDialog}
        onRequestClose={() => this.props.actions.closeSaveDialog()}
      >
        {(() => {
          if (this.props.request.waiting) {
            return (
              <div>
                <CircularProgress size={60} thickness={7} />
              </div>
            )
          } else {
            return (
              <div>
                <p>Input a name</p>
                <TextField
                  hintText="name"
                  defaultValue={this.props.form.name}
                  onChange={(e, value) => this.props.actions.changeName(value)}
                />
              </div>
            )
          }
        })()}
      </Dialog>
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
