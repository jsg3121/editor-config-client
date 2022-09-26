type OptionsValue = {
  [x: string]: string
}

type SelectOptionType = (value?: OptionsValue) => Array<string>

/**
 * info : Select의 옵션을 추출하여 배열형식으로 변경
 * @param value object key
 * @returns
 */
export const selectOptions: SelectOptionType = (value) => {
  if (value) {
    return Object.keys(value)
  } else {
    return ['']
  }
}
