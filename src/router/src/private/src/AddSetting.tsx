import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import { ConfigForm, FormDescription } from '../../../../container'
import '../../../../style/setting.scss'

const AddSetting: React.FC = observer(() => {
  return (
    <div className="setting">
      <ConfigForm />
      <FormDescription />
    </div>
  )
})

export default React.memo(AddSetting, isEqual)
