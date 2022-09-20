import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../../../../style/detail.scss'

type RouteParams = {
  id: string
}

const Detail: React.FC = () => {
  const { id } = useParams<RouteParams>()

  const {} = useQuery([`/detail/${id}`])

  return (
    <section className="detail__container">
      <article className="detail__content">
        <div className="content__info"></div>
      </article>
    </section>
  )
}

export default Detail
