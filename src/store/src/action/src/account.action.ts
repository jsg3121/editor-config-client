import { createAsyncThunk } from '@reduxjs/toolkit'
import { Service } from '../../../../service'

export const login = createAsyncThunk<Promise<LoginResult>, LoginForm>(
  '@@ACCOUNT/LOGIN',
  Service.login
)
