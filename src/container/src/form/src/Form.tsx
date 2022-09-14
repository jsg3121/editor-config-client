import isEqual from 'fast-deep-equal'
import React from 'react'
import '../../../../style/login.scss'

interface FormContainerProps {
  children: React.ReactNode
  buttons: React.ReactNode
  onSubmit: (event: React.FormEvent) => void
  onActive?: () => void
}

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const { children, buttons, onSubmit } = props

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      onSubmit(e)
    },
    [onSubmit]
  )

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__input">{children}</div>
        <div className="form__button">{buttons}</div>
      </form>
    </>
  )
}

export default React.memo(FormContainer, isEqual)
