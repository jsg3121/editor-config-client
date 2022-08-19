import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button, Input, Modal } from '../../../../component'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()

  const { isLoading, isError } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
      // dispatch(Actions.account.login(data))
    },
    []
  )

  const handleClickModal = React.useCallback(() => {
    dispatch(Actions.account.clear())
  }, [])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">회원 가입</h1>
          <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input">
              <div className="form__input-box">
                <p className="form__input--label">Email</p>
                <Input.Text
                  type="text"
                  inputSize="large"
                  mode="primary"
                  label="email"
                  register={register}
                  required
                />
                {errors.email && (
                  <span className="form__input--error">
                    이메일을 입력해주세요
                  </span>
                )}
              </div>
              <div className="form__input-box">
                <p className="form__input--label">Name</p>
                <Input.Text
                  type="text"
                  inputSize="large"
                  mode="primary"
                  label="email"
                  register={register}
                  required
                />
                {errors.email && (
                  <span className="form__input--error">
                    이름을 입력해주세요
                  </span>
                )}
              </div>
              <div className="form__input-box">
                <p className="form__input--label">Password</p>
                <Input.Text
                  type="password"
                  inputSize="large"
                  mode="primary"
                  label="password"
                  register={register}
                  required
                />
                {errors.password && (
                  <span className="form__input--error">
                    비밀번호를 입력해주세요
                  </span>
                )}
              </div>
            </div>
            <div className="form__input-options"></div>
            <div className="form__button">
              <Button
                label="가입하기"
                disabled={isLoading}
                type="submit"
                buttonType="primary"
              />
              <Link to="/login" replace>
                <Button label="뒤로가기" type="button" buttonType="default" />
              </Link>
            </div>
          </form>
        </article>
        <div className="login__background"></div>
      </section>
      {isError && <Modal description={isError} onClick={handleClickModal} />}
    </>
  )
}

export default React.memo(SignUp, isEqual)