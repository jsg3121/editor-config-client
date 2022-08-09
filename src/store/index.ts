import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import rootActions from './src/action'
import rootEpic from './src/epic'
import rootReducer, { history as initHistory } from './src/reducer'

export const history = initHistory

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(routerMiddleware(history))
      .concat(epicMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export const Actions = rootActions
export const useDispatch = () => useReduxDispatch<Dispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
