import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Modal } from '../../../../components'
import { DetailInfo } from '../../../../container'
import { ConfigInfoService } from '../../../../service'
import { Actions, useDispatch, useSelector } from '../../../../store'
import '../../../../style/detail.scss'

type RouteParams = {
  id: string
}

type DetailType = {
  configName: string
  configType: string
  configDetail: {
    [key in string]: string
  }
  createDate: string
  updateDate?: string
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>()
  const { accessToken, id: userId } = useSelector((store) => store.account)
  const dispatch = useDispatch()

  const { data } = useQuery<DetailType>([`/detail/${id}`], async () => {
    const result = await ConfigInfoService.getDetailConfig(id, accessToken)

    return {
      configName: result.data.configName,
      configType: result.data.configType,
      configDetail: JSON.parse(result.data.configDetail),
      createDate: result.data.createDate,
    }
  })

  const { mutate, isSuccess } = useMutation(
    ConfigInfoService.deleteDetailConfig
  )

  const handleDelete = React.useCallback(() => {
    const confirm = window.confirm('정말 삭제하시겠습니까?')
    if (mutate && confirm) {
      mutate({ id, userId, accessToken })
    }
  }, [accessToken, id, mutate, userId])

  const hadleClickRouteModal = React.useCallback(() => {
    dispatch(Actions.routerActions.replace('/board'))
  }, [dispatch])

  return (
    <section className="detail__container">
      <div className="detail__button">
        <div className="button__box">
          <Button buttonType="primary" label="수정" size="medium" />
          <Button
            buttonType="danger"
            label="설정 삭제"
            size="medium"
            onClick={handleDelete}
          />
        </div>
      </div>
      <DetailInfo data={data} />
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
