import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../style/component.scss'
import '../index.css'
import { Input } from '../component'

export default {
  title: 'Input/Text',
  component: Input.Text,
  argTypes: {
    inputSize: { defaultValue: 'medium', name: '크기' },
    mode: {
      name: '입력값 상태',
      options: ['edit', 'primary', 'error', 'success'],
      control: 'select',
    },
    type: {
      options: ['text', 'password'],
      control: 'select',
      name: '입력 타입',
    },
    value: { name: '입력값' },
  },
} as ComponentMeta<typeof Input.Text>

const Template: ComponentStory<typeof Input.Text> = (props) => (
  <Input.Text {...props} />
)

export const Primary = Template.bind({})
Primary.args = {
  mode: 'primary',
  value: 'primary',
  inputSize: 'medium',
  type: 'text',
}

export const Edit = Template.bind({})
Edit.args = {
  mode: 'edit',
  value: 'edit',
  inputSize: 'medium',
  type: 'text',
}

export const Error = Template.bind({})
Error.args = {
  mode: 'error',
  value: 'error',
  inputSize: 'medium',
  type: 'text',
}

export const Success = Template.bind({})
Success.args = {
  mode: 'success',
  value: 'success',
  inputSize: 'medium',
  type: 'text',
}
