declare namespace ConfigTypes {
  interface IPrettier {
    arrowParens?: 'always' | 'avoid'
    bracketSpacing?: boolean
    endOfLine?: 'auto' | 'lf' | 'crlf' | 'cr'
    htmlWhitespaceSensitivity?: 'css' | 'strict' | 'ignore'
    jsxBracketSameLine?: boolean
    jsxSingleQuote?: boolean
    printWidth?: number
    proseWrap?: 'preserve' | 'always' | 'never'
    quoteProps?: 'as-needed' | 'consistent' | 'preserve'
    semi?: boolean
    singleQuote?: true
    tabWidth?: number
    trailingComma?: 'all' | 'es5' | 'none'
    useTabs?: boolean
    vueIndentScriptAndStyle?: boolean
  }

  interface IDetailes extends IPrettier {}

  type IDescription = {
    [key in keyof IDetailes]: {
      desc: string
      type: string
      value?: {
        [k in string]: string
      }
    }
  }

  type RootStoreType = {
    name: string
    type: string
    detail: IDetailes
  }

  interface ConfigDataType {
    Options: IDetailes
    Description: IDescription
  }

  interface RequestConfigType {
    data: {
      userId: number
      configName: string
      configType: string
      configDetail: IDetailes
    }
    token: string
  }

  interface ResponseConfigList {
    code: number
    data: {
      id: number
      userId: number
      configName: string
      configType: string
      configDetail: string
    }[]
  }

  interface ResponseDetailConfig {
    data: {
      id: number
      userId: number
      configName: string
      configType: string
      configDetail: string
      createDate: string
      updateDate: string | null
    }
  }
}
