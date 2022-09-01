import React from 'react'
import isEqual from 'fast-deep-equal'

interface NoticeProps {
  mode: {
    type: 'edit' | 'primary' | 'error' | 'success'
    description?: string
  }
}

const Notice: React.FC<NoticeProps> = (props) => {
  const { mode } = props

  return (
    <>
      {mode.type !== 'primary' && (
        <p>
          {mode.description ? mode.description : '입력 형식이 맞지 않습니다'}
        </p>
      )}
    </>
  )
}

export default React.memo(Notice, isEqual)
