import _ from 'lodash'
import * as actions from '../../actions/metage/form'

const initialState = {
  form: {
    name: '',
    domains: []
  },
  ui: {
    open: false,
    openSaveDialog: false,
    keyword: ''
  },
  request: {
    waiting: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.OPEN_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          open: true
        }
      }
    case actions.CLOSE_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          open: false
        }
      }
    case actions.OPEN_SAVE_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          openSaveDialog: true
        }
      }
    case actions.CLOSE_SAVE_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          openSaveDialog: false
        }
      }
    case actions.CHANGE_KEYWORD:
      return {
        ...state,
        ui: {
          ...state.ui,
          keyword: action.keyword
        }
      }
    case actions.CHANGE_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.name
        }
      }
    case actions.START_CONNECTION:
      return {
        ...state,
        request: { waiting: true }
      }
    case actions.RECEIVE_DOMAINS:
      return {
        ...state,
        form: {
          ...state.form,
          domains: _.uniq(state.form.domains.concat(action.domains))
        },
        ui: {
          ...state.ui,
          open: false,
          keyword: ''
        },
        request: { waiting: false, }
      }
    case actions.RECEIVE_METAGE_RESPONSE:
      if (action.error) {
        alert(action.error)
        return {
          ...state,
          request: { waiting: true }
        }
      } else {
        alert('Done!')
        return {
          ...state,
          form: {
            name: '',
            domains: []
          },
          ui: {
            ...state.ui,
            openSaveDialog: false
          },
          request: { waiting: false }
        }
      }
    default:
      return state
  }
}
