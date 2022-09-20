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
        <article className="dashboard__recently-config"></article>
        <article className="dashboard__most-useful"></article>
        <article className="dashboard__chart"></article>
      </BoardProvider>
    </section>
  )
}

export default React.memo(DashBoard, isEqual)
