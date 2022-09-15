import React from 'react'
import isEqual from 'fast-deep-equal'
import { Actions, useDispatch, useSelector } from '../../store'
import { Modal } from '../../component'

const ModalContainer: React.FC = () => {
  const { isModal } = useSelector((store) => store.common)

  const dispatch = useDispatch()

  const handleClickModal = React.useCallback(
    (type?: string) => {
      dispatch(Actions.common.modalClose())
      if (type === 'primary') {
        dispatch(Actions.routerActions.replace('/login'))
      }
    },
    [dispatch]
  )

  return (
    <>
      {isModal.isOpen && (
        <Modal
          description={isModal.description}
          type={isModal.type}
          onClick={handleClickModal}
        />
      )}
    </>
  )
}

export default React.memo(ModalContainer, isEqual)
