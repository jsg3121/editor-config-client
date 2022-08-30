type UseFormModeType =
  | {
      type: string
      status: number
    }
  | boolean

export const formMode = (value: UseFormModeType) => {
  if (typeof value === 'boolean') {
    return value ? 'error' : 'primary'
  } else {
    if (!value) {
      return 'primary'
    }
    return value.status === 200 ? 'success' : 'error'
  }
}
