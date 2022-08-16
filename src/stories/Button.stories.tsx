import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button as ButtonComponent } from '../component'

export default {
  title: 'Input/Button',
  component: ButtonComponent,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (props) => {
  const {} = props

  return <ButtonComponent {...props} />
}

export const Button = Template.bind({})
Button.args = {
  label: 'Button',
}
