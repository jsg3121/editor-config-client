import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch } from '../components'

export default {
  title: 'Input/Switch',
  component: Switch,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    switchId: {
      defaultValue: 'switch',
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (props) => <Switch {...props} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'lebel',
  value: false,
}
