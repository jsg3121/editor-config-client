import React from 'react'
import isEqual from 'fast-deep-equal'
import '../../../../style/dashboard.scss'
import { BoardProvider } from '../../../../context'
import ConfigList from './ConfigList'

const DashBoard: React.FC = () => {
  return (
    <section className="dashboard">
      <BoardProvider>
        <ConfigList />
        <article className="dashboard__chart">
          <h1 className="dashboard__title">최근 사용 설정파일</h1>
        </article>
        <article className="dashboard__most-useful">
          <h1 className="dashboard__title">가장 많이 사용한 설정</h1>
        </article>
        <article className="dashboard__recently-config">
          <h1 className="dashboard__title">통계</h1>
        </article>
      </BoardProvider>
    </section>
  )
}

export default React.memo(DashBoard, isEqual)
