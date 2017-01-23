import axios from 'axios'

const base_url = ''

export const OPEN_DIALOG = 'OPEN_DIALOG'
export function openDialog() {
  return { type: OPEN_DIALOG }
}

export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export function closeDialog() {
  return { type: CLOSE_DIALOG }
}

export const OPEN_SAVE_DIALOG = 'OPEN_SAVE_DIALOG'
export function openSaveDialog() {
  return { type: OPEN_SAVE_DIALOG }
}

export const CLOSE_SAVE_DIALOG = 'CLOSE_SAVE_DIALOG'
export function closeSaveDialog() {
  return { type: CLOSE_SAVE_DIALOG }
}

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD'
export function changeKeyword(keyword) {
  return { type: CHANGE_KEYWORD, keyword: keyword }
}

export const CHANGE_NAME = 'CHANGE_NAME'
export function changeName(name) {
  return { type: CHANGE_NAME, name: name }
}

export const START_CONNECTION = 'START_CONNECTION'
export function startConnection() {
  return { type: START_CONNECTION }
}

export const RECEIVE_DOMAINS = 'RECEIVE_DOMAINS'
export function receiveDomains(domains) {
  return { type: RECEIVE_DOMAINS, domains: domains }
}

export const RECEIVE_METAGE_RESPONSE = 'RECEIVE_METAGE_RESPONSE'
export function receiveMetageResponse(result, error) {
  return { type: RECEIVE_METAGE_RESPONSE, result: result, error: error }
}

export function fetchDomains() {
  return (dispatch, getState) => {
    const state = getState().metageForm

    if (state.request.waiting) {
      return Promise.resolve()
    }

    dispatch(startConnection())

    return axios.get(`${base_url}/domains/${state.ui.keyword}`)
      .then((response) => {
        dispatch(receiveDomains(response.data.domains))
      })
      .catch((error) => alert(error))
  }
}

export function postSegment() {
  return (dispatch, getState) => {
    const state = getState().metageForm

    if (state.request.waiting) {
      return Promise.resolve()
    }

    dispatch(startConnection())

    return axios.post(`${base_url}/metage`, state.form)
      .then((response) => {
        dispatch(receiveMetageResponse(response.data.result))
      })
      .catch((error) => alert(receiveMetageResponse(response.data.result, error)))
  }
}
