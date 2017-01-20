import * as types from '../constants/ActionTypes'

const initialState = {
  segments: [],
  form: {}
}

export default function metage(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_METAGE_INDEX_DIALOG:
      return {
        ...state,
        segments: state.segments.map((segment, i) =>
          Object.assign(segment, { open: i == action.index })
        )
      }
    case types.CLOSE_METAGE_INDEX_DIALOG:
      return {
        ...state,
        segments: state.segments.map((segment) =>
          Object.assign(segment, { open: false })
        )
      }
    case types.OPEN_METAGE_FORM_DIALOG:
      return {
        ...state,
        form: {
          ...state.form,
          open: true
        }
      }
    case types.CLOSE_METAGE_FORM_DIALOG:
      return {
        ...state,
        form: {
          ...state.form,
          open: false
        }
      }
    default:
      return state
  }
}
