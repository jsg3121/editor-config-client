import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AccountService } from '../../../../service'

export const login = createAsyncThunk<LoginResult, LoginRequestForm>(
  '@@ACCOUNT/LOGIN',
  AccountService.login
)

export const signup = createAsyncThunk<SignUpResult, SignUpRequestForm>(
  '@@ACCOUNT/SIGNUP',
  AccountService.signup
)

export const logout = createAsyncThunk<LogoutResult, LogoutRequestForm>(
  '@@ACCOUNT/LOGOUT',
  AccountService.logout
)

export const validCheck = createAction<ValidCheckForm, '@@ACCOUNT/VALIDCHECK'>(
  '@@ACCOUNT/VALIDCHECK'
)

export const clear = createAction<void, '@@ACCOUNT/CLEAR'>('@@ACCOUNT/CLEAR')
