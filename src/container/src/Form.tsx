import React from 'react'
import { Button } from '../../component'
import { Actions, useDispatch, useSelector } from '../../store'
import '../../style/login.scss'

interface FormContainerProps<T> {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent) => void
  onActive?: () => void
}

const FormContainer = <T extends unknown>(props: FormContainerProps<T>) => {
  const { children, onSubmit } = props

  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.account)

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/login'))
  }, [])

  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    onSubmit(e)
  }, [])

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__input">{children}</div>
        <div className="form__button">
          <Button
            label="가입하기"
            isLoading={isLoading}
            type="submit"
            buttonType="primary"
          />
          <Button
            label="뒤로가기"
            type="button"
            buttonType="default"
            onClick={handleClickRoute}
          />
        </div>
      </form>
    </>
  )
}

export default FormContainer
