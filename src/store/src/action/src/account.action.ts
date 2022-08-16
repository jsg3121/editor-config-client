import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginService } from '../../../../service'

export const login = createAsyncThunk<LoginResult, LoginRequestForm>(
  '@@ACCOUNT/LOGIN',
  LoginService.login
)

export const logout = createAsyncThunk<LogoutResult, void>(
  '@@ACCOUNT/LOGOUT',
  LoginService.logout
)
