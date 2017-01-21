import axios from 'axios'

export const OPEN_DIALOG = 'OPEN_METAGE_FORM_DIALOG'
export function openDialog() {
  return { type: OPEN_DIALOG }
}

export const CLOSE_DIALOG = 'CLOSE_METAGE_FORM_DIALOG'
export function closeDialog() {
  return { type: CLOSE_DIALOG }
}

export const CHANGE_KEYWORD = 'CHANGE_KEYWORD'
export function changeKeyword(keyword) {
  return { type: CHANGE_KEYWORD, keyword: keyword }
}

export const START_REQUEST_DOMAINS = 'START_REQUEST_DOMAINS'
export function startRequestDomains() {
  return { type: START_REQUEST_DOMAINS }
}

export const SUCCESS_REQUEST_DOMAINS = 'SUCCESS_REQUEST_DOMAINS'
export function successRequestDomains(domains) {
  return { type: SUCCESS_REQUEST_DOMAINS, domains: domains }
}

export function requestDomains(state) {
  const post = (dispatch, state) => {
    dispatch(startRequestDomains())

    const url = `http://localhost:4567/domains/${state.ui.keyword}`
    return axios.get(url)
      .then((response) => {
        dispatch(successRequestDomains(response.data))
      })
      .catch((error) => console.log(error))
  }

  return (dispatch, getState) => {
    const state = getState().metageForm
    if (state.request.waiting) {
      return Promise.resolve()
    } else {
      return post(dispatch, state)
    }
  }
}
