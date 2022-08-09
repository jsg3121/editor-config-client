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
  },
} as ComponentMeta<typeof Input.Checkbox>

const Template: ComponentStory<typeof Input.Checkbox> = (props) => {
  const { register, ...rest } = props

  const handleRegister = () => {}

  return <Input.Checkbox register={handleRegister} {...rest} />
}

export const Checkbox = Template.bind({})
Checkbox.args = {
  checked: true,
  disabled: false,
  value: 'Checkbox',
}
