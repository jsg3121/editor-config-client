import { createAction } from '@reduxjs/toolkit'

type ModalPayloadType = {
  type: 'danger' | 'default' | 'primary'
  description: string
}

export const modalOpen =
  createAction<ModalPayloadType, '@@COMMON/MODALOPEN'>('@@COMMON/MODALOPEN')

export const modalClose = createAction<void, '@@COMMON/MODALCLOSE'>(
  '@@COMMON/MODALCLOSE'
)
