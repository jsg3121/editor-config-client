import { observer } from 'mobx-react'
import React from 'react'
import { ConfigContext } from '../../../../context'

interface FormDescriptionProps {}

const FormDescription: React.FC<FormDescriptionProps> = observer(() => {
  const { config } = React.useContext(ConfigContext)

  return (
    <>
      <div className="setting__descript">
        <p>{config?.selectDescription.desc}</p>
        {config &&
          Object.entries(config.selectDescription.value).map((entry, index) => {
            return (
              <React.Fragment key={index}>
                <p>
                  {entry[0]} : {entry[1]}
                </p>
              </React.Fragment>
            )
          })}
      </div>
    </>
  )
})

export default FormDescription
