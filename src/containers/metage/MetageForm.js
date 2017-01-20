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
import * as MetageActions from '../../actions/metage'

class MetageForm extends Component {

  static PropTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

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
            onTouchTap={() => this.props.actions.openFormDialog()} />
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
        onTouchTap={() => this.props.actions.closeFormDialog()}
      />,
    ]

    return (
      <div>
        <Dialog
          title="Input a keyword"
          actions={actions}
          modal={false}
          open={this.props.form.open || false}
          autoScrollBodyContent={true}
          onRequestClose={() => this.props.actions.closeFormDialog()}
        >
          <TextField hintText="keyword" />
        </Dialog>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MetageForm)
