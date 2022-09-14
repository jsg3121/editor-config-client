import { useQuery } from '@tanstack/react-query'
import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, FormItem } from '../../../../container'
import { ConfigInfoService } from '../../../../service'
import '../../../../style/setting.scss'

const AddSetting: React.FC = () => {
  const [detail, setDetail] = React.useState<string>()

  const { data } = useQuery([`info/config`], ConfigInfoService.getConfigInfo)

  const { register, handleSubmit, setValue } = useForm<SettingList>()

  const onSubmit: SubmitHandler<SettingList> = React.useCallback((data) => {
    console.log(data)
  }, [])

  const handleSelect = React.useCallback((val: string) => {
    // setValue('configDetail', val)
    setDetail(val)
  }, [])

  const handleChange = React.useCallback((val: boolean | string) => {
    console.log(val)
  }, [])

  return (
    <div className="setting">
      <div className="setting__form">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormItem.Text
            inputSize="large"
            label="configName"
            name="저장명"
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
}

export default React.memo(AddSetting, isEqual)
