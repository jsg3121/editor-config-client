import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input, Modal } from '../../../../component'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/login.scss'

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestForm>()

  const { isLoading, isError } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<LoginRequestForm> = React.useCallback(
    (data) => {
      dispatch(Actions.account.login(data))
    },
    [dispatch]
  )

  const handleClickModal = React.useCallback(() => {
    dispatch(Actions.account.clear())
  }, [dispatch])

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/signup'))
  }, [dispatch])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">
            <span>Editor</span> Config
          </h1>
          <p className="form__title-sub">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Dolores nemo, nihil sit culpa repellendus impedit
          </p>
          <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input">
              <div className="form__input-box">
                <p className="form__input--label">Email</p>
                <Input.Text<LoginRequestForm>
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
                <p className="form__input--label">Password</p>
                <Input.Text<LoginRequestForm>
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
            <div className="form__input-options">
              <div className="form__input-checkbox--remember">
                <Input.Checkbox<LoginRequestForm>
                  value="auto_login"
                  description="자동 로그인"
                  label="isAutoLogin"
                  register={register}
                  required={false}
                />
              </div>
              <div className="form__link--foget-password">
                <p>비밀번호를 잊어버렸어요</p>
              </div>
            </div>
            <div className="form__button">
              <Button
                label="로그인"
                disabled={isLoading}
                type="submit"
                buttonType="primary"
              />
              <Button
                label="회원 가입"
                type="button"
                buttonType="default"
                onClick={handleClickRoute}
              />
            </div>
          </form>
        </article>
        <div className="login__background"></div>
      </section>
      {isError && <Modal description={isError} onClick={handleClickModal} />}
    </>
  )
}

export default React.memo(Login, isEqual)
