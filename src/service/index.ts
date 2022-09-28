import { QueryClient } from '@tanstack/react-query'

export * from './src/account.service'
export * from './src/config.service'
export * from './src/token.service'

export const queryClient = new QueryClient()
