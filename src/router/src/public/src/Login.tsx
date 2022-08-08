import React from 'react'
import isEqual from 'fast-deep-equal'
import { Button, Input } from '../../../../component'
import '../../../../style/login.scss'

const Login: React.FC = () => {
  const handleClickLogin = React.useCallback(() => {
    console.log('d')
  }, [])

  const handleCheckRemember = React.useCallback((isRemember: boolean) => {
    console.log(isRemember)
  }, [])

  return (
    <>
      <section className="login__container">
        <article className="login__container--form">
          <h1 className="form__title">Editor Config</h1>
          <div className="form__input">
            <div className="form__input-box">
              <p className="form__input--label">Email</p>
              <Input.Text type="text" inputSize="large" mode="primary" />
            </div>
            <div className="form__input-box">
              <p className="form__input--label">Password</p>
              <Input.Text type="password" inputSize="large" mode="primary" />
            </div>
          </div>
          <div className="form__input-options">
            <div className="form__input-checkbox--remember">
              <Input.Checkbox
                label="자동 로그인"
                value="auto_login"
                onChange={handleCheckRemember}
              />
            </div>
            <div className="form__link--foget-password">
              <p>비밀번호를 잊어버렸어요</p>
            </div>
          </div>
          <Button label="로그인" onClick={handleClickLogin} />
        </article>
      </section>
    </>
  )
}

export default React.memo(Login, isEqual)
