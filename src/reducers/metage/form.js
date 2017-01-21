import _ from 'lodash'
import * as actions from '../../actions/metage/form'

const initialState = {
  form: {
    name: 'interested_in_hoge',
    domains: [
      'hogehoge1.com', 'hogehoge2.com', 'hogehoge3.com', 'hogehoge4.com',
      'hogehoge5.com', 'hogehoge6.com', 'hogehoge7.com', 'hogehoge8.com',
      'hogehoge9.com', 'hogehogeA.com', 'hogehogeB.com', 'hogehogeC.com',
      'hogehogeD.com', 'hogehogeE.com', 'hogehogeF.com'
    ]
  },
  ui: {
    open: false,
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
    case actions.CHANGE_KEYWORD:
      return {
        ...state,
        ui: {
          ...state.ui,
          keyword: action.keyword
        }
      }
    case actions.START_REQUEST_DOMAINS:
      return {
        ...state,
        request: { waiting: true }
      }
    case actions.SUCCESS_REQUEST_DOMAINS:
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
    default:
      return state
  }
}
