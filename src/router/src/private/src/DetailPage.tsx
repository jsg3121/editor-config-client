import React from 'react'
import { Detail } from '../../../../container'
import { DetailProvider } from '../../../../context'

interface DetailPageProps {}

const DetailPage: React.FC<DetailPageProps> = () => {
  return (
    <>
      <DetailProvider>
        <Detail />
      </DetailProvider>
    </>
  )
}

export default DetailPage
