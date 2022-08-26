import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import '../../style/login.scss'
import { Button, Form } from '../../component'
import { Actions, useDispatch, useSelector } from '../../store'

const FormContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestForm>()

  const dispatch = useDispatch()
  const { isLoading } = useSelector((store) => store.account)

  const onSubmit: SubmitHandler<SignUpRequestForm> = React.useCallback(
    (data) => {
      dispatch(Actions.account.signup(data))
    },
    []
  )

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/login'))
  }, [])

  const handleValid = React.useCallback((value: string, type: string) => {}, [])

  return (
    <>
      <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input">
          <Form.Item
            errors={errors.email ? true : false}
            name="Email"
            type="text"
            inputSize="large"
            mode={errors.email ? 'error' : 'primary'}
            label="email"
            register={register}
            onValid={handleValid}
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
            onValid={handleValid}
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
        </div>
        <div className="form__input-options"></div>
        <div className="form__button">
          <Button
            label="가입하기"
            disabled={isLoading}
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

export default React.memo(FormContainer, isEqual)
