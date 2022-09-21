import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ConfigInfoService } from '../../../../service'
import { useSelector } from '../../../../store'
import '../../../../style/detail.scss'

type RouteParams = {
  id: string
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>()
  const { accessToken } = useSelector((store) => store.account)

  const { data } = useQuery([`/detail/${id}`], async () => {
    const result = await ConfigInfoService.getDetailConfig(id, accessToken)

    return result.data
  })

  React.useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className="detail__container">
      <article className="detail__content">
        <div className="content__info"></div>
      </article>
    </section>
  )
}

export default Detail
