type UseFormModeType =
  | {
      status: number
      description?: string
    }
  | boolean
  | undefined

type FormModeType = (form: UseFormModeType) => {
  type: 'edit' | 'primary' | 'error' | 'success'
  description?: string
}

export const formMode: FormModeType = (value) => {
  if (typeof value === 'boolean') {
    return value
      ? { type: 'error', description: '입력 형식이 올바르지 않습니다' }
      : { type: 'primary' }
  } else {
    if (!value) {
      return { type: 'primary' }
    }
    return value.status === 200
      ? { type: 'success', description: value.description }
      : { type: 'error', description: value.description }
  }
}
