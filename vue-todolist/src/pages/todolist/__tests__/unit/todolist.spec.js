import { shallowMount } from '@vue/test-utils'
import Todolist from '@/pages/todolist/index.vue'
import vHeader from '@/pages/todolist/components/header.vue'
import undolist from '@/pages/todolist/components/undolist.vue'

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
    expect(undolist[0]).toEqual({ status: 'p', value: '呆呆' })
  })

  it('todolist调用undolist，应该传递list参数', () => {
    const wrapper = shallowMount(Todolist)
    const Undolist = wrapper.find(undolist)
    const list = Undolist.props('list')
    expect(list).toBeTruthy() // 传递的list参数应该是存在的
  })

  it('todolist监听到undolist派发的delete事件时，会减少一个内容', () => {
    // 下面注释的这种写法是我自己想的，感觉太笨了
    // const wrapper = shallowMount(Todolist)
    // const header = wrapper.find(vHeader)
    // const Undolist = wrapper.find(undolist)
    // const undolistData = wrapper.vm.$data.undolist
    // header.vm.$emit('add', '呆呆')
    // Undolist.vm.$emit('deleteItem', 0)
    // expect(undolistData.length).toBe(0)
    const wrapper = shallowMount(Todolist)
    wrapper.setData({
      undolist: [1, 2, 3]
    })
    wrapper.vm.deleteItem(1)
    expect(wrapper.vm.$data.undolist).toEqual([1, 3])
  })
})
