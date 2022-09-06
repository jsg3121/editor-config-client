import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from '../component'
import '../index.css'
import '../style/component.scss'

export default {
  title: 'Modal/Modal',
  component: Modal,
  argTypes: {
    onClick: {
      table: {
        disabled: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (props) => {
  return <Modal {...props} />
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  description: 'Description',
}

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  description: 'Default Description',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  description: 'Danger Description',
}
