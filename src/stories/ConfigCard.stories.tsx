import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ConfigCard } from '../components'

export default {
  title: 'Card/Config',
  component: ConfigCard,
  argTypes: {
    configId: { table: { disable: true } },
    configName: {
      type: 'string',
      defaultValue: 'Card Name',
      name: '카드 명',
    },
    onClick: { table: { disable: true } },
    configRecently: { table: { disable: true } },
    configType: { type: 'string', defaultValue: 'prettier' },
  },
} as ComponentMeta<typeof ConfigCard>

const Template: ComponentStory<typeof ConfigCard> = (props) => (
  <div className="h-screen p-4 bg-primary-700 flex item-start">
    <ConfigCard {...props} />
  </div>
)

export const Config = Template.bind({})
Config.args = {
  configName: 'Config Name',
  configType: 'prettier',
}
