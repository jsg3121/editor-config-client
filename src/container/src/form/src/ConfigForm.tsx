import { observer } from 'mobx-react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { selectOptions } from '../../../../common'
import { Button, Form, FormItem } from '../../../../components'
import { ConfigContext } from '../../../../context'
import { Actions, useDispatch, useSelector } from '../../../../store'

type RouteParams = {
  id: string
}

const ConfigForm: React.FC = observer(() => {
  const { id } = useParams<RouteParams>()
  const { data, isLoading, config, mutate, selectDescription } =
    React.useContext(ConfigContext)
  const { id: userId, accessToken } = useSelector((store) => store.account)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm<SettingList>()

  const onSubmit: SubmitHandler<SettingList> = React.useCallback(
    (data) => {
      if (mutate && config) {
        const formData = {
          id,
          userId,
          ...data,
          configDetail: {
            ...config.selectDetail.configDetail,
            ...config.configDetail,
          },
        }

        mutate({
          data: formData,
          token: accessToken,
          method: id ? 'PATCH' : 'POST',
        })
      }
    },
    [accessToken, config, id, mutate, userId]
  )

  const handleSelect = React.useCallback(
    (val: { label: string; value: string }) => {
      if (config) {
        config.changeConfig(val.label, val.value)
      }
    },
    [config]
  )

  const handleChange = React.useCallback(
    (val: { label: string; value: boolean | string }) => {
      if (config) {
        config.changeConfig(val.label, val.value)
      }
    },
    [config]
  )

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/board'))
  }, [dispatch])

  const handleHover = React.useCallback(
    (value: string) => {
      const key = value as keyof ConfigTypes.IDetails
      if (selectDescription) {
        selectDescription(key)
      }
    },
    [selectDescription]
  )

  const buttons = React.useMemo(() => {
    return (
      <>
        <Button
          label="저장하기"
          type="submit"
          buttonType="primary"
          isLoading={isLoading}
          disabled={isLoading}
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
      <div className="setting__form">
        <Form onSubmit={handleSubmit(onSubmit)} buttons={buttons}>
          <FormItem.Text
            inputSize="large"
            label="configName"
            defaultValue={config?.selectDetail.configName}
            name="저장명"
            register={register}
            type="text"
          />
          <FormItem.Text
            inputSize="large"
            label="configType"
            defaultValue={config?.selectDetail.configType}
            disabled={config?.selectDetail.configType ? true : false}
            name="파일 타입"
            register={register}
            type="text"
          />
          {data &&
            config &&
            Object.entries(data.Description).map((item, index) => {
              const [key, value] = item
              if (value.type === 'select') {
                const defaultValue =
                  (config.selectDetail.configDetail[key] as string) || '-'

                return (
                  <React.Fragment key={index}>
                    <FormItem.Select
                      label={key}
                      onSelect={handleSelect}
                      defaultValue={defaultValue}
                      options={selectOptions(value.value)}
                      onHover={handleHover}
                    />
                  </React.Fragment>
                )
              } else if (value.type === 'boolean') {
                const defaultValue =
                  (config.selectDetail.configDetail[key] as boolean) || false

                return (
                  <React.Fragment key={index}>
                    <FormItem.Switch
                      label={key}
                      onChange={handleChange}
                      defaultValue={defaultValue}
                      onHover={handleHover}
                    />
                  </React.Fragment>
                )
              } else {
                const defaultValue =
                  (config.selectDetail.configDetail[key] as number) || 0

                return (
                  <React.Fragment key={index}>
                    <FormItem.Number
                      label={key}
                      onChange={handleChange}
                      defaultValue={defaultValue}
                      onHover={handleHover}
                    />
                  </React.Fragment>
                )
              }
            })}
        </Form>
      </div>
    </>
  )
})

export default ConfigForm
