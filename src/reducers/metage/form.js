import { OPEN_DIALOG, CLOSE_DIALOG } from '../../actions/metage/form'

const initialState = {
  entities: {
    segment: {
      name: 'interested_in_hoge',
      domains: [
        'hogehoge1.com', 'hogehoge2.com', 'hogehoge3.com', 'hogehoge4.com',
        'hogehoge5.com', 'hogehoge6.com', 'hogehoge7.com', 'hogehoge8.com',
        'hogehoge9.com', 'hogehogeA.com', 'hogehogeB.com', 'hogehogeC.com',
        'hogehogeD.com', 'hogehogeE.com', 'hogehogeF.com'
      ]
    }
  },
  ui: {
    open: false
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          open: true
        }
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        ui: {
          ...state.ui,
          open: false
        }
      }
    default:
      return state
  }
}
