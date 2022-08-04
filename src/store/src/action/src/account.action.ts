import { createAction } from '@reduxjs/toolkit'

type UserLoginType = {
  email: User['email']
  password: User['password']
}

export const login = createAction<UserLoginType, '@@ACCOUNT/LOGIN'>(
  '@@ACCOUNT/LOGIN'
)
