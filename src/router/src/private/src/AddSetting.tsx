import { useMutation, useQuery } from '@tanstack/react-query'
import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../../../../component'
import { Form, FormItem } from '../../../../container'
import { useMobxStore } from '../../../../hook'
import { ConfigInfoService } from '../../../../service'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/setting.scss'

const AddSetting: React.FC = observer(() => {
  const { id, accessToken } = useSelector((store) => store.account)
  const dispatch = useDispatch()
  const { data } = useQuery([`info/config`], ConfigInfoService.getConfigInfo)
  const {
    mutate,
    isLoading,
    data: mutateData,
  } = useMutation(ConfigInfoService.patchConfigInfo)
  const { register, handleSubmit } = useForm<SettingList>()

  const { config } = useMobxStore()

  const onSubmit: SubmitHandler<SettingList> = React.useCallback(
    (data) => {
      const formData = {
        userId: id,
        ...data,
        configDetail: {
          ...config.configDetail,
        },
      }

      mutate({ data: formData, token: accessToken })
    },
    [accessToken, config, id, mutate]
  )

  const handleSelect = React.useCallback(
    (val: { label: string; value: string }) => {
      config.changeConfig(val.label, val.value)
    },
    [config]
  )

  const handleChange = React.useCallback(
    (val: { label: string; value: boolean | string }) => {
      config.changeConfig(val.label, val.value)
    },
    [config]
  )

  const handleClickRoute = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/board'))
  }, [dispatch])

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

  React.useEffect(() => {
    console.log(mutateData)
  }, [mutateData])

  React.useEffect(() => {
    if (data) {
      config.initConfig(data.Options)
    }
  }, [config, data])

  return (
    <div className="setting">
      <div className="setting__form">
        <Form onSubmit={handleSubmit(onSubmit)} buttons={buttons}>
          <FormItem.Text
            inputSize="large"
            label="configName"
            name="저장명"
            register={register}
            type="text"
          />
          <FormItem.Text
            inputSize="large"
            label="configType"
            name="파일 타입"
            register={register}
            type="text"
          />
          {data &&
            Object.keys(data.Description).map((item, index) => {
              if (data.Description[item].type === 'select') {
                return (
                  <React.Fragment key={index}>
                    <FormItem.Select
                      label={item}
                      onSelect={handleSelect}
                      defaultValue={data.Options[item]}
                      options={Object.keys(data.Description[item].value)}
                    />
                  </React.Fragment>
                )
              } else if (data.Description[item].type === 'boolean') {
                return (
                  <React.Fragment key={index}>
                    <FormItem.Switch
                      label={item}
                      onChange={handleChange}
                      defaultValue={data.Options[item]}
                    />
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment key={index}>
                    <FormItem.Number
                      label={item}
                      onChange={handleChange}
                      defaultValue={data.Options[item]}
                    />
                  </React.Fragment>
                )
              }
            })}
        </Form>
      </div>
    </div>
  )
})

export default React.memo(AddSetting, isEqual)
