import React from 'react'
import { ConfigContext } from '../../../../context'

interface FormDescriptionProps {}

const FormDescription: React.FC<FormDescriptionProps> = () => {
  const { config } = React.useContext(ConfigContext)

  React.useEffect(() => {
    if (config) {
    }
  }, [config])

  return (
    <>
      <div className="setting__descript">
        {/* <p>{description?.desc}</p>
        {description &&
          Object.entries(description.value).map((entry, index) => {
            return (
              <React.Fragment key={index}>
                <p>
                  {entry[0]} : {entry[1]}
                </p>
              </React.Fragment>
            )
          })} */}
      </div>
    </>
  )
}

export default FormDescription
