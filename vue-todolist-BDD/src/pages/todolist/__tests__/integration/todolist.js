import { mount } from '@vue/test-utils'
import todolit from '../../index.vue'

it(`
1. 用户在输入框输入内容
2. 回车
3. 列表项应该增加用户输入的内容
`, () => {
  const wrapper = mount(todolit)
  const inputElem = wrapper.find('.header-input') // 获取header组件中的input元素
  const inputContent = 'hello world'
  inputElem.setValue(inputContent) // 模拟在input框中输入'hello world'
  inputElem.trigger('change') // 模拟输入的内容要模拟change事件才能生效
  inputElem.trigger('keyup.enter') // 模拟回车事件
  const undolistItem = wrapper.findAll('.undolist-item') // undolist中的列表项
  expect(undolistItem.length).toBe(1)
  expect(undolistItem.at(0).find('p').text()).toBe(inputContent)
})
