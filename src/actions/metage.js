import * as types from '../constants/ActionTypes'

export function openIndexDialog(index) {
  return { type: types.OPEN_METAGE_INDEX_DIALOG, index: index }
}

export function closeIndexDialog() {
  return { type: types.CLOSE_METAGE_INDEX_DIALOG }
}

export function openFormDialog() {
  return { type: types.OPEN_METAGE_FORM_DIALOG }
}

export function closeFormDialog() {
  return { type: types.CLOSE_METAGE_FORM_DIALOG }
}
