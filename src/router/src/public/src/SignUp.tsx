import isEqual from 'fast-deep-equal'
import React from 'react'
import { Modal, SignUpForm } from '../../../../container'
import '../../../../style/login.scss'

const SignUp: React.FC = () => {
  return (
    <>
      <section className="login__container">
        <SignUpForm />
        <div className="login__background"></div>
      </section>
      <Modal />
    </>
  )
}

export default React.memo(SignUp, isEqual)
