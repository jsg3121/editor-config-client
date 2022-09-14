import isEqual from 'fast-deep-equal'
import React from 'react'
import { Button } from '../../../../component'
import { Actions, useDispatch } from '../../../../store'
import '../../../../style/gnb.scss'

const GNB: React.FC = () => {
  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(Actions.routerActions.push('/setting/add'))
  }, [dispatch])

  return (
    <div className="gnb">
      <div className="gnb__buttons">
        <Button
          buttonType="primary"
          label="설정 파일 만들기"
          size="medium"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default React.memo(GNB, isEqual)
