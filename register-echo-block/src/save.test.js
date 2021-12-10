import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Save from './save'
import React from 'react'
import { create } from 'react-test-renderer'

// テストのセットアップ
global.React = React
Enzyme.configure({ adapter: new Adapter() })

test('こだまが表示される', () => {
  const wrapper = shallow(<Save attributes={{ text: 'こんにちは' }} />)
  const echos = wrapper.find('span')
  expect(echos).toHaveLength(4)
  echos.map(echo => expect(echo.text()).toBe('こんにちは'))
})

test('スナップショットが一致する', () => {
  const tree = create(<Save attributes={{ text: 'こんにちは' }} />).toJSON()
  expect(tree).toMatchSnapshot()
})
