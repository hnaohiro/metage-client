import { OPEN_DOMAIN_DIALOG, CLOSE_DOMAIN_DIALOG } from '../constants/ActionTypes'

const initialState = {
  segments: []
}

export default function metage(state = initialState, action) {
  switch (action.type) {
    case OPEN_DOMAIN_DIALOG:
      return {
        segments: state.segments.map((segment, i) =>
          Object.assign(segment, { open: i == action.index })
        )
      }
    case CLOSE_DOMAIN_DIALOG:
      return {
        segments: state.segments.map((segment) =>
          Object.assign(segment, { open: false })
        )
      }
    default:
      return state
  }
}
