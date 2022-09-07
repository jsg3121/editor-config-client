import React from 'react'
import isEqual from 'fast-deep-equal'
import '../../../../style/snb.scss'
import { SNBItem } from '../../../../component/src/SNB'
import { Actions, useDispatch } from '../../../../store'

const SNB: React.FC = () => {
  const dispatch = useDispatch()

  const handleRoute = React.useCallback((route: string) => {
    // dispatch(Actions.routerActions.push(route))
  }, [])

  return (
    <div className="snb">
      <div className="snb__menu">
        <ul className="menu">
          <SNBItem label="Label 1" />
          <SNBItem
            label="label123"
            subItems={[
              {
                label: 'option1',
                url: '/as',
              },
              {
                label: 'option2',
                url: '/qewe',
              },

              {
                label: 'option3',
                url: '/zxcv',
              },
            ]}
            onRoute={handleRoute}
          />
          <SNBItem label="label set" />
        </ul>
      </div>
      <div className="snb__footer">
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default React.memo(SNB, isEqual)
