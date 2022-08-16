import { createAsyncThunk } from '@reduxjs/toolkit'
import { TokenService } from '../../../../service'

export const tokenCheck = createAsyncThunk<TokenResult, TokenRequsetForm>(
  '@@TOKEN/TOKENCHECK',
  TokenService.tokenCheck
)
