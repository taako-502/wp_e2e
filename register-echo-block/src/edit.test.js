import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Edit from './edit'
import React from 'react'

// テストのセットアップ
global.React = React
Enzyme.configure({ adapter: new Adapter() })

test('テキストボックスがレンダリングされる', () => {
  const wrapper = shallow(<Edit attributes={{ text: 'こんにちは' }} />)
  const input = wrapper.find('input')
  expect(input).toHaveLength(1)
})

test('`attributes.text` で与えられた値がテキストボックスにセットされる', () => {
  const wrapper = shallow(<Edit attributes={{ text: 'こんにちは' }} />)
  const input = wrapper.find('input')
  expect(input.get(0).props.value).toBe('こんにちは')
})

test('input が変更されると`setAttributes`がコールされる', () => {
  const mockFn = jest.fn()
  const mockEvent = { target: { value: 'こんばんは' } }
  const wrapper = shallow(
    <Edit attributes={{ text: 'こんにちは' }} setAttributes={mockFn} />
  )
  const input = wrapper.find('input')
  input.simulate('change', mockEvent)
  expect(mockFn).toBeCalledWith({ text: 'こんばんは' })
})
