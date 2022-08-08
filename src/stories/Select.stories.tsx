import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from '../component'
import '../index.css'
import '../style/component.scss'

export default {
  title: 'Input/SelectBox',
  component: Select,
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
    onSelect: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (props) => <Select {...props} />

export const SelectBox = Template.bind({})
SelectBox.args = {
  options: ['Option1', 'Option2', 'Option3', 'Option4'],
  placeholder: 'select',
  disabled: false,
  onSelect: (val) => {
    console.log(val)
  },
}
