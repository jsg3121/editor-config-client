import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal as ModalComponent } from '../component'

export default {
  title: 'Modal/Modal',
  component: ModalComponent,
  argTypes: {
    onClick: {
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof ModalComponent>

const Template: ComponentStory<typeof ModalComponent> = (props) => {
  return <ModalComponent {...props} />
}

export const Modal = Template.bind({})
Modal.args = {
  description: 'Description',
}
