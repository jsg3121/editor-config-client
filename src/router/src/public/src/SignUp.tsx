import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, Modal } from '../../../../component'
import { FormContainer } from '../../../../container'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()

  const { isError } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  const handleClickModal = React.useCallback(() => {
    dispatch(Actions.account.clear())
  }, [])

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
      console.log(data)
      // dispatch(Actions.account.signup(data))
    },
    []
  )

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">회원 가입</h1>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Form.Item
              errors={errors.email ? true : false}
              name="Email"
              type="text"
              inputSize="large"
              mode={errors.email ? 'error' : 'primary'}
              label="email"
              register={register}
              // onValid={handleValid}
              required
            />
            <Form.Item
              errors={errors.name ? true : false}
              name="Name"
              type="text"
              inputSize="large"
              mode={errors.name ? 'error' : 'primary'}
              label="name"
              register={register}
              // onValid={handleValid}
              required
            />
            <Form.Item
              errors={errors.password ? true : false}
              name="Password"
              type="password"
              inputSize="large"
              mode={errors.password ? 'error' : 'primary'}
              label="password"
              register={register}
              required
            />
          </FormContainer>
        </article>
        <div className="login__background"></div>
      </section>
      {isError && <Modal description={isError} onClick={handleClickModal} />}
    </>
  )
}

export default React.memo(SignUp, isEqual)
