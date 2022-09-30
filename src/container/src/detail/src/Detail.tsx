import React from 'react'
import { fileDownload } from '../../../../common'
import { Button, Detailinfo, Modal } from '../../../../components'
import { DetailContext } from '../../../../context'
import { Actions, useDispatch } from '../../../../store'
import '../../../../style/detail.scss'

const Detail: React.FC = () => {
  const { id, userId, data, accessToken, isSuccess, mutate } =
    React.useContext(DetailContext)

  const dispatch = useDispatch()

  const handleDelete = React.useCallback(() => {
    const confirm = window.confirm('정말 삭제하시겠습니까?')
    if (mutate && confirm) {
      mutate({ id, userId, accessToken })
    }
  }, [accessToken, id, mutate, userId])

  const hadleRoutePatch = React.useCallback(() => {
    dispatch(Actions.routerActions.push(`/setting/edit/${id}`))
  }, [dispatch, id])

  const hadleClickRouteModal = React.useCallback(() => {
    dispatch(Actions.routerActions.replace('/board'))
  }, [dispatch])

  const handleDownload = React.useCallback(() => {
    if (data) {
      fileDownload(data.configDetail)
    }
  }, [data])

  return (
    <section className="detail__container">
      <div className="detail__button">
        <div className="button__box">
          <Button
            buttonType="primary"
            label="수정"
            size="medium"
            onClick={hadleRoutePatch}
          />
          <Button
            buttonType="primary"
            label="파일 다운로드"
            size="medium"
            onClick={handleDownload}
          />
          <Button
            buttonType="danger"
            label="설정 삭제"
            size="medium"
            onClick={handleDelete}
          />
        </div>
      </div>
      <Detailinfo data={data} />
      {isSuccess && (
        <Modal
          onClick={hadleClickRouteModal}
          description="성공적으로 삭제 되었습니다."
          type="primary"
        />
      )}
    </section>
  )
}

export default Detail
