import isEqual from 'fast-deep-equal'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Form, FormItem } from '../../../../container'
import '../../../../style/setting.scss'

const AddSetting: React.FC = () => {
  const [detail, setDetail] = React.useState()

  const { register, handleSubmit, setValue } = useForm<SettingList>()

  const onSubmit: SubmitHandler<SettingList> = React.useCallback((data) => {
    console.log(data)
  }, [])

  const handleSelect = React.useCallback((val: string) => {
    console.log(val)
    // setValue('configDetail', val)
    setDetail(val)
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
          <FormItem.Select
            label="ddd"
            onSelect={handleSelect}
            options={['1', '2']}
          />
          <FormItem.Select
            label="ddd2"
            onSelect={handleSelect}
            options={['1', '2']}
          />
          <FormItem.Select
            label="ddd3"
            onSelect={handleSelect}
            options={['1', '2']}
          />
          <FormItem.Text
            inputSize="large"
            label="configType"
            name=""
            register={register}
            type="text"
          />
        </Form>
      </div>
    </div>
  )
}

export default React.memo(AddSetting, isEqual)
