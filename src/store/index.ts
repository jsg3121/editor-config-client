import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import rootActions from './src/action'
import rootEpic from './src/epic'
import rootReducer from './src/reducer'

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const Actions = rootActions
export const useDispatch = () => useReduxDispatch<Dispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
