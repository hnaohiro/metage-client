import * as types from '../constants/ActionTypes'

export function openDomainDialog(index) {
  return { type: types.OPEN_DOMAIN_DIALOG, index: index }
}

export function closeDomainDialog() {
  return { type: types.CLOSE_DOMAIN_DIALOG }
}
