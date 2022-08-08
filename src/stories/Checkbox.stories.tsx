import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../style/component.scss'
import '../index.css'
import { Input } from '../component'

export default {
  title: 'Input/Checkbox',
  component: Input.Checkbox,
} as ComponentMeta<typeof Input.Checkbox>

const Template: ComponentStory<typeof Input.Checkbox> = (props) => (
  <Input.Checkbox {...props} />
)

export const Checkbox = Template.bind({})
Checkbox.args = {
  checked: true,
  disabled: false,
  label: 'Checkbox',
  value: 'Checkbox',
}
