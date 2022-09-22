import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    isLoading: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => {
  return <Button {...props} />
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  buttonType: 'primary',
}

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  buttonType: 'default',
}

export const Danger = Template.bind({})
Danger.args = {
  label: 'Button',
  buttonType: 'danger',
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  buttonType: 'primary',
  isLoading: true,
  disabled: true,
}
