export const OPEN_DIALOG = 'OPEN_METAGE_FORM_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_METAGE_FORM_DIALOG'

export function openDialog() {
  return { type: OPEN_DIALOG }
}

export function closeDialog() {
  return { type: types.CLOSE_DIALOG }
}
