import React from 'react'
import isEqual from 'fast-deep-equal'
import { Button } from '../../button'

interface ModalProps {
  onClick: (type?: string) => void
  description?: string
  type?: 'danger' | 'default' | 'primary'
}

const Modal: React.FC<ModalProps> = (props) => {
  const { onClick, description, type = 'default' } = props

  const handleClick = React.useCallback(() => {
    onClick(type)
  }, [])

  return (
    <section className="modal">
      <article className="modal__dim">
        <div className="modal__container">
          <div className="modal__container--text">
            <p>{description}</p>
          </div>
          <Button label="확인" onClick={handleClick} buttonType={type} />
        </div>
      </article>
    </section>
  )
}

export default React.memo(Modal, isEqual)
