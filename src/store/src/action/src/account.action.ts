import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginService } from '../../../../service'

export const login = createAsyncThunk<Promise<LoginResult>, LoginForm>(
  '@@ACCOUNT/LOGIN',
  LoginService.login
)
