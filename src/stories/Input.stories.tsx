import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputText } from '../component'

export default {
  title: 'Input/Text',
  component: InputText,
  argTypes: {
    inputSize: { defaultValue: 'medium' },
  },
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (props) => (
  <InputText {...props} />
)

export const Primary = Template.bind({})
Primary.args = {
  mode: 'Primary',
  value: 'Primary',
  inputSize: 'medium',
}

export const Edit = Template.bind({})
Edit.args = {
  mode: 'Edit',
  value: 'Edit',
  inputSize: 'medium',
}

export const Error = Template.bind({})
Error.args = {
  mode: 'Error',
  value: 'Error',
  inputSize: 'medium',
}

export const Disabled = Template.bind({})
Disabled.args = {
  mode: 'Disabled',
  value: 'Disabled',
  inputSize: 'medium',
}

export const Success = Template.bind({})
Success.args = {
  mode: 'Success',
  value: 'Success',
  inputSize: 'medium',
}
