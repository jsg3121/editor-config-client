import React from 'react'
import { Modal } from '../../../../components'
import { Detail } from '../../../../container'
import { DetailContext, DetailProvider } from '../../../../context'
import { Actions, useDispatch } from '../../../../store'

interface DetailPageProps {}

const DetailPage: React.FC<DetailPageProps> = () => {
  const { isSuccess } = React.useContext(DetailContext)
  const dispatch = useDispatch()

  const hadleClickRouteModal = React.useCallback(() => {
    dispatch(Actions.routerActions.replace('/board'))
  }, [dispatch])

  return (
    <>
      <DetailProvider>
        <Detail />
        {isSuccess && (
          <Modal
            onClick={hadleClickRouteModal}
            description="성공적으로 삭제 되었습니다."
            type="primary"
          />
        )}
      </DetailProvider>
    </>
  )
}

export default DetailPage
