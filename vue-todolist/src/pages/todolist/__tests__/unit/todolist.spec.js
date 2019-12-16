import { shallowMount } from '@vue/test-utils'
import Todolist from '@/pages/todolist/index.vue'
import vHeader from '@/pages/todolist/components/header.vue'

describe('Todolist.vue', () => {
  it('todolist初始化时，undolist应该为空', () => {
    const wrapper = shallowMount(Todolist)
    const undolist = wrapper.vm.$data.undolist
    expect(undolist).toEqual([])
  })

  it('todolist监听到header派发的add事件时，会增加一个内容', () => {
    const wrapper = shallowMount(Todolist)
    const header = wrapper.find(vHeader)
    header.vm.$emit('add', '呆呆')
    const undolist = wrapper.vm.$data.undolist
    expect(undolist[0]).toBe('呆呆')
  })
})
