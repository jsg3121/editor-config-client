import isEqual from 'fast-deep-equal'
import React from 'react'
import { Modal } from '../../../../component'
import { Form } from '../../../../container'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const { isError } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  const handleClickModal = React.useCallback(() => {
    dispatch(Actions.account.clear())
  }, [])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">회원 가입</h1>
          <Form />
        </article>
        <div className="login__background"></div>
      </section>
      {isError && <Modal description={isError} onClick={handleClickModal} />}
    </>
  )
}

export default React.memo(SignUp, isEqual)
