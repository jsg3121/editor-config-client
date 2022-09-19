type OptionsValue = {
  [x: string]: string
}

type SelectOptionType = (value?: OptionsValue) => Array<string>

export const selectOptions: SelectOptionType = (value) => {
  if (value) {
    return Object.keys(value)
  } else {
    return ['']
  }
}
