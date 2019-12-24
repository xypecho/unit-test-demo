import Vue from 'vue'

// 获取当前元素的index
const _index = (el) => {
  let index = 0
  // parentNode是获取指定的节点在DOM树中的父节点
  if (!el || !el.parentNode) {
    return -1
  }
  // previousElementSibling 属性返回指定元素的前一个兄弟元素
  while (el && (el = el.previousElementSibling)) {
    index++
  }
  return index
}

let draging = null // 当前正在拖动的元素对象

const drag = Vue.directive('drag', {
  inserted: function (el) {
    // 当拖动元素或选中的文本时触发
    el.ondragstart = e => {
      draging = e.target
    }

    // 当元素或选中的文本被拖到一个可释放目标上时触发，与ondragenter的区别在于，ondragenter是拖拽的过程中经过可以被拖拽的元素就会触发，而ondragover拖动到可以拖动的元素才会触发
    el.ondragover = e => {
      e.preventDefault()
      const target = e.target.parentNode // 当前可以拖动的元素的对象
      if (target.nodeName === 'LI' && target !== draging) {
        if (_index(draging) < _index(target)) {
          target.parentNode.insertBefore(draging, target.nextSibling)
        } else {
          target.parentNode.insertBefore(draging, target)
        }
      }
    }
  }
})

export default drag
