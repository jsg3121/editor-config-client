import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../style/component.scss'
import '../index.css'
import { Input } from '../component'

export default {
  title: 'Input/Chekbox',
  component: Input.Chekbox,
} as ComponentMeta<typeof Input.Chekbox>

const Template: ComponentStory<typeof Input.Chekbox> = (props) => (
  <Input.Chekbox {...props} />
)

export const Chekbox = Template.bind({})
Chekbox.args = {
  checked: true,
  disabled: false,
  label: 'Checkbox',
  value: 'Checkbox',
}
