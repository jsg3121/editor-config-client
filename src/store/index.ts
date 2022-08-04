import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './src/reducer'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import rootActions from './src/action'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const Actions = rootActions
export const useDispatch = () => useReduxDispatch<Dispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
