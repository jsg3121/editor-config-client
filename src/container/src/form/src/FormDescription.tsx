import React from 'react'

interface FormDescriptionProps {
  description?: string
}

const FormDescription: React.FC<FormDescriptionProps> = (props) => {
  const { description } = props
  return (
    <>
      <div className="setting__descript">
        <p>{description}</p>
      </div>
    </>
  )
}

export default FormDescription
