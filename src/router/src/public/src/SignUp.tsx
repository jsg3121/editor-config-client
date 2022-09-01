import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegExp } from '../../../../common'
import { Modal } from '../../../../component'
import { FormContainer, FormItem } from '../../../../container'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()
  const { isModal } = useSelector((store) => store.common)
  const dispatch = useDispatch()

  const handleClickModal = React.useCallback((type?: string) => {
    dispatch(Actions.common.modalClose())
    if (type === 'primary') {
      dispatch(Actions.routerActions.replace('/login'))
    }
  }, [])

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
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
            <FormItem
              type="text"
              name="Email"
              label="email"
              inputSize="large"
              pattern={{
                rule: RegExp.email,
                description: '올바른 이메일 형식이 아닙니다',
              }}
              register={register}
              required
              isDebounce
            />
            <FormItem
              type="text"
              name="Name"
              label="name"
              inputSize="large"
              register={register}
              required
              isDebounce
            />
            <FormItem
              type="password"
              name="Password"
              label="password"
              inputSize="large"
              pattern={{
                rule: RegExp.password,
                description:
                  '6자 이상의 영문 대,소문자, 숫자, 특수문자 조합으로 생성해주세요',
              }}
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
