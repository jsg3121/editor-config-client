import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { LoginService } from '../../../../service'

export const login = createAsyncThunk<LoginResult, LoginRequestForm>(
  '@@ACCOUNT/LOGIN',
  LoginService.login
)

export const logout = createAsyncThunk<LogoutResult, LogoutRequestForm>(
  '@@ACCOUNT/LOGOUT',
  LoginService.logout
)

export const clear = createAction<void, '@@ACCOUNT/CLEAR'>('@@ACCOUNT/CLEAR')
