import React from 'react'
import { Button, Detailinfo } from '../../../../components'
import { DetailContext } from '../../../../context'
import { Actions, useDispatch } from '../../../../store'
import '../../../../style/detail.scss'

const Detail: React.FC = () => {
  const { id, userId, data, accessToken, mutate } =
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
            buttonType="danger"
            label="설정 삭제"
            size="medium"
            onClick={handleDelete}
          />
        </div>
      </div>
      <Detailinfo data={data} />
    </section>
  )
}

export default Detail
