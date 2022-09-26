type UseFormModeType =
  | {
      status: number
      description?: string
    }
  | boolean

type FormModeType = (form: UseFormModeType) => {
  type: 'edit' | 'primary' | 'error' | 'success'
  description?: string
}

/**
 * info : form 내에서 valid check를 하기 전 입력 형식 체크
 * @param value UseFormModeType
 * @returns type: 요청 성공 여부, description: 성공 여부에 따른 추가 내용
 */
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
