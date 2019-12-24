import { shallowMount } from '@vue/test-utils'
import undolist from '@/pages/todolist/components/undolist.vue'

describe('测试undolist.vue', () => {
  it('undolist参数为[]，count应该是0，且列表无内容', () => {
    const wrapper = shallowMount(undolist, {
      propsData: {
        list: []
      }
    })
    const countElem = wrapper.find('.count')
    const listItems = wrapper.findAll('.item')
    expect(countElem.text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it('undolist参数为[1,2,3]，count应该是3，且列表有内容', () => {
    const wrapper = shallowMount(undolist, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const countElem = wrapper.find('.count')
    const listItems = wrapper.findAll('.item')
    expect(countElem.text()).toEqual('3')
    expect(listItems.length).toEqual(3)
  })

  it('undolist删除按钮被点击时，向外派发删除事件', () => {
    const wrapper = shallowMount(undolist, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const deleteButtons = wrapper.findAll('.deleteButtons').at(1)
    deleteButtons.trigger('click')
    expect(wrapper.emitted().deleteItem).toBeTruthy()
    expect(wrapper.emitted().deleteItem[0][0]).toBe(1) // 点击第二个删除按钮传的索引值应该是1
  })

  it('undolist中的input变化时，向外派发handlechange事件', () => {
    const wrapper = shallowMount(undolist, {
      propsData: {
        list: [
          { status: 'input', value: 1 },
          { status: 'p', value: 2 },
          { status: 'p', value: 3 }
        ]
      }
    })
    const inputElem = wrapper.findAll('input[type="text"]').at(0)
    inputElem.trigger('change')
    expect(wrapper.emitted().hanleChange).toBeTruthy() // 期望change事件触发
  })
})
