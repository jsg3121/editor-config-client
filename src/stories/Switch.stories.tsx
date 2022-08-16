import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch as SwitchComponent } from '../component'

export default {
  title: 'Input/Switch',
  component: SwitchComponent,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof SwitchComponent>

const Template: ComponentStory<typeof SwitchComponent> = (props) => (
  <SwitchComponent {...props} />
)

export const Switch = Template.bind({})
Switch.args = {
  label: 'lebel',
  value: false,
}
