import React from 'react'
import { ConfigForm, FormDescription } from '../../../../container'
import { ConfigProvider } from '../../../../context'
import '../../../../style/setting.scss'

const AddSetting: React.FC = () => {
  return (
    <div className="setting">
      <ConfigProvider>
        <ConfigForm />
        <FormDescription />
      </ConfigProvider>
    </div>
  )
}

export default AddSetting
