import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '../component'
import '../index.css'
import '../style/component.scss'

export default {
  title: 'Input/Text',
  component: Input.Text,
  argTypes: {
    inputSize: { name: '크기' },
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
    register: {
      control: false,
      table: {
        disable: true,
      },
    },
    label: {
      control: false,
      table: {
        disable: true,
      },
    },
    required: {
      table: {
        disable: true,
      },
    },
    pattern: {
      table: {
        disable: true,
      },
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input.Text>

const Template: ComponentStory<typeof Input.Text> = (props) => {
  const { register, ...rest } = props

  const handleRegister = () => {}

  return <Input.Text register={handleRegister} {...rest} />
}

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
