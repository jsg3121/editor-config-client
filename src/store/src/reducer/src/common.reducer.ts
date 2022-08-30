import { createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import { commonActions } from '../../action'

type CommonStateType = {
  isModal: {
    isOpen?: boolean
    type?: 'danger' | 'default' | 'primary'
    description?: string
  }
}

const commonState: CommonStateType = {
  isModal: {},
}

const commonReducer = createReducer<CommonStateType>(commonState, (builder) => {
  builder
    .addCase(commonActions.modalOpen, (store, { payload }) => {
      return produce(store, (draft) => {
        draft.isModal.isOpen = true
        draft.isModal.type = payload.type
        draft.isModal.description = payload.description
      })
    })
    .addCase(commonActions.modalClose, (store, _) => {
      return produce(store, (draft) => {
        draft.isModal = {}
      })
    })
})

export default commonReducer
