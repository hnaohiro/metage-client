export const OPEN_DIALOG = 'OPEN_DIALOG'
export function openDialog(index) {
  return { type: OPEN_DIALOG, index: index }
}

export const CLOSE_DIALOG = 'CLOSE_DIALOG'
export function closeDialog() {
  return { type: CLOSE_DIALOG }
}
