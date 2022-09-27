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

  interface IDetails extends IPrettier {}

  type IDescription = {
    [key in keyof IDetails]: {
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
    detail: IDetails
  }

  interface ConfigDataType {
    Options: IDetails
    Description: IDescription
  }

  interface RequestConfigType {
    method: 'POST' | 'PATCH'
    data: {
      userId: number
      configName: string
      configType: string
      configDetail: IDetails
      id?: number | string
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

  interface RequestDeleteConfig {
    userId: number | string
    id: number | string
    accessToken: string
  }

  interface RequestPatchConfig {
    id: number | string
    userId: number | string
    patchData: IDetails
  }

  interface DetailDataType {
    configName: string
    configType: string
    configDetail: {
      [key in string]: string | number | boolean
    }
    createDate: string
    updateDate?: string
  }
}
