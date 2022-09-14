import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegExp } from '../../../../common'
import { Button, Modal } from '../../../../component'
import { Form, FormItem } from '../../../../container'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()

  const { isModal } = useSelector((store) => store.common)
  const { isLoading } = useSelector((store) => store.account)

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

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/login'))
  }, [dispatch])

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
      dispatch(Actions.account.signup(data))
    },
    [dispatch]
  )

  const buttons = React.useMemo(() => {
    return (
      <>
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
      </>
    )
  }, [handleClickRoute, isLoading])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">회원 가입</h1>
          <Form onSubmit={handleSubmit(onSubmit)} buttons={buttons}>
            <FormItem.Text
              type="text"
              name="Email"
              label="email"
              inputSize="large"
              pattern={{
                rule: RegExp.email,
                description: '올바른 이메일 형식이 아닙니다',
              }}
              errors={errors.email ? true : false}
              register={register}
              required
              isDebounce
            />
            <FormItem.Text
              type="text"
              name="Name"
              label="name"
              inputSize="large"
              errors={errors.name ? true : false}
              register={register}
              required
              isDebounce
            />
            <FormItem.Text
              type="password"
              name="Password"
              label="password"
              inputSize="large"
              pattern={{
                rule: RegExp.password,
                description:
                  '6자 이상의 영문 대,소문자, 숫자, 특수문자 조합으로 생성해주세요',
              }}
              errors={errors.password ? true : false}
              register={register}
              required
            />
          </Form>
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
