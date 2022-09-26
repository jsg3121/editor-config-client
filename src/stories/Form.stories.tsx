import { ComponentMeta, ComponentStory } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { Button, Form, FormItem } from '../components'

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const client = new QueryClient()

// #TODO : FormItem.Text valid 체크 부분 컴포넌트단에서 이동 후 수정 필요
const Template: ComponentStory<typeof Form> = (props) => {
  const handleChange = useCallback(() => {}, [])
  const handleSubmit = useCallback(() => {}, [])

  const buttons = useMemo(() => {
    return (
      <>
        <Button label="가입하기" type="button" buttonType="primary" />
        <Button label="뒤로가기" type="button" buttonType="default" />
      </>
    )
  }, [])

  return (
    <QueryClientProvider client={client}>
      <div className="w-1/2 p-4 rounded-lg border">
        <h1 className="text-3xl text-primary-500 font-bold">Title</h1>
        <Form buttons={buttons} onSubmit={handleSubmit}>
          <FormItem.Text
            inputSize="large"
            label="Text Input"
            name="Input Name"
            type="text"
          />
          <FormItem.Text
            inputSize="large"
            label="Password Input"
            name="Input Password"
            type="password"
          />
          <FormItem.Number label="Number Input" onChange={handleChange} />
          <FormItem.Switch label="Switch Input" onChange={handleChange} />
          <FormItem.Select
            label="Select Input"
            onSelect={handleChange}
            options={['option1', 'option2', 'option3']}
          />
        </Form>
      </div>
    </QueryClientProvider>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
