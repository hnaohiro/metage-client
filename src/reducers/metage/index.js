import { OPEN_DIALOG, CLOSE_DIALOG } from '../../actions/metage/index'

const initialState = {
  entities: {
    segments: [
      {
        id: 1,
        name: 'John Smith',
        domains: [
          'hogehoge1.com', 'hogehoge2.com', 'hogehoge3.com', 'hogehoge4.com',
          'hogehoge5.com', 'hogehoge6.com', 'hogehoge7.com', 'hogehoge8.com',
          'hogehoge9.com', 'hogehogeA.com', 'hogehogeB.com', 'hogehogeC.com',
          'hogehogeD.com', 'hogehogeE.com', 'hogehogeF.com'
        ],
      },
      {
        id: 2,
        name: 'Randal White',
        domains: ['hogehoge.com'],
      },
      {
        id: 3,
        name: 'Stephanie Sanders',
        domains: ['hogehoge.com'],
      },
      {
        id: 4,
        name: 'Steve Brown',
        domains: ['hogehoge.com'],
      },
      {
        id: 5,
        name: 'Joyce Whitten',
        domains: ['hogehoge.com'],
      },
      {
        id: 6,
        name: 'Samuel Roberts',
        domains: ['hogehoge.com'],
      },
      {
        id: 7,
        name: 'Adam Moore',
        domains: ['hogehoge.com'],
      },
    ],
  },
  ui: {
    open: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        ui: Object.assign({}, state.ui, { open: action.index })
      }
    case CLOSE_DIALOG:
      return {
        ...state,
        ui: Object.assign({}, state.ui, { open: null })
      }
    default:
      return state
  }
}
