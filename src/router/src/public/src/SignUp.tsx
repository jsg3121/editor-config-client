import { useMutation } from '@tanstack/react-query'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { formMode } from '../../../../common'
import { Form, Modal } from '../../../../component'
import { FormContainer } from '../../../../container'
import { AccountService } from '../../../../service'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const [formData, setFormData] = React.useState<any>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()
  const { isModal } = useSelector((store) => store.common)
  const dispatch = useDispatch()
  const { mutate, data = {} } = useMutation(AccountService.validCheck, {})

  const handleClickModal = React.useCallback((type?: string) => {
    dispatch(Actions.common.modalClose())
    if (type === 'primary') {
      dispatch(Actions.routerActions.replace('/login'))
    }
  }, [])

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
      dispatch(Actions.account.signup(data))
    },
    []
  )

  const handleValid = React.useCallback((value: string, type: string) => {
    mutate({ type, value })
  }, [])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">회원 가입</h1>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Form.Item
              name="Email"
              type="text"
              inputSize="large"
              mode={formMode(data.email || errors.email)}
              label="email"
              register={register}
              onValid={handleValid}
              required
            />
            <Form.Item
              name="Name"
              type="text"
              inputSize="large"
              mode={formMode(data.name || errors.name)}
              label="name"
              register={register}
              onValid={handleValid}
              required
            />
            <Form.Item
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

export default React.memo(SignUp, isEqual)
