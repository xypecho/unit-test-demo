import { shallowMount } from '@vue/test-utils'
import header from '@/pages/todolist/components/header.vue'

describe('测试header.vue', () => {
  it('header组件css发生变化时，提示', () => {
    const wrapper = shallowMount(header);
    expect(wrapper).toMatchSnapshot();
  })
  it('测试是否存在input', () => {
    const wrapper = shallowMount(header)
    const input = wrapper.find('input[type="text"]')
    expect(input.exists()).toBe(true)
  })

  it('input初始值是否为空', () => {
    const wrapper = shallowMount(header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('input值发生变化，inputValue应该跟着变', () => {
    const wrapper = shallowMount(header)
    const input = wrapper.find('input[type="text"]')
    input.setValue('test')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('test')
  })

  it('input值为空时，不触发回车事件', () => {
    const wrapper = shallowMount(header)
    const input = wrapper.find('input[type="text"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input值不为空时，触发回车事件，同时inputValue为空', () => {
    const wrapper = shallowMount(header)
    const input = wrapper.find('input[type="text"]')
    input.setValue('123')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
