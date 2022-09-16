import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import { ConfigForm, FormDescription } from '../../../../container'
import { ConfigProvider } from '../../../../context'
import '../../../../style/setting.scss'

const AddSetting: React.FC = observer(() => {
  return (
    <div className="setting">
      <ConfigProvider>
        <ConfigForm />
        <FormDescription />
      </ConfigProvider>
    </div>
  )
})

export default React.memo(AddSetting, isEqual)
