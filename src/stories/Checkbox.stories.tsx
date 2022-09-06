import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../style/component.scss'
import '../index.css'
import { Input } from '../component'

export default {
  title: 'Input/Checkbox',
  component: Input.Checkbox,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    register: {
      table: {
        disable: true,
      },
    },
    description: {
      type: 'string',
      defaultValue: 'checkbox',
    },
    required: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Input.Checkbox>

const Template: ComponentStory<typeof Input.Checkbox> = (props) => {
  const { register, ...rest } = props

  const handleRegister = () => {}

  return <Input.Checkbox register={handleRegister} {...rest} />
}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
  disabled: false,
  value: 'Checkbox',
  description: 'checkbox description',
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  checked: false,
  disabled: false,
  value: 'Checkbox',
  description: 'checkbox description',
}
