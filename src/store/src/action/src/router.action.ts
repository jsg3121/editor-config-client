import { createAction } from '@reduxjs/toolkit'
import {
  CALL_HISTORY_METHOD,
  LocationActionPayload,
  LOCATION_CHANGE,
} from 'connected-react-router'

export const locationChange =
  createAction<LocationActionPayload, typeof LOCATION_CHANGE>(LOCATION_CHANGE)

export const replace =
  createAction<LocationActionPayload, typeof CALL_HISTORY_METHOD>(
    CALL_HISTORY_METHOD
  )
