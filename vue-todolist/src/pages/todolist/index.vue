<template>
  <div>
    <vHeader @add='add' />
    <section>
      <undolist :list='undolist' @deleteItem='deleteItem' @changeItemStatus='changeItemStatus' @changeInputStatus='changeInputStatus' @hanleChange='hanleChange' @handleCheckboxChange='handleCheckboxChange' />
      <dolist :dolist='dolist' @deleteItem='deleteItem' @handleCheckboxChange='handleCheckboxChange'/>
    </section>
  </div>
</template>

<script>
import vHeader from './components/header'
import undolist from './components/undolist'
import dolist from './components/dolist'

export default {
  components: {
    vHeader,
    undolist,
    dolist
  },
  data () {
    return {
      undolist: [{ value: 1, status: 'p', checked: true }, { value: 2, status: 'p', checked: true }, { value: 3, status: 'p', checked: true }],
      dolist: []
    }
  },
  methods: {
    add (inputValue) {
      this.undolist.push({ value: inputValue, status: 'p', checked: false })
    },
    deleteItem (index, type) {
      if (type) {
        this.dolist.splice(index, 1)
      } else {
        this.undolist.splice(index, 1)
      }
    },
    changeItemStatus (index) {
      const newArr = []
      this.undolist.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newArr.push({
            status: 'input',
            value: item.value,
            checked: item.checked
          })
        } else {
          newArr.push({
            status: 'p',
            value: item.value,
            checked: item.checked
          })
        }
      })
      this.undolist = newArr
    },
    changeInputStatus (index) {
      const newArr = []
      this.undolist.forEach((item, itemIndex) => {
        newArr.push({ status: 'p', value: item.value, checked: item.checked })
      })
      this.undolist = newArr
    },
    hanleChange (value, index) {
      this.undolist[index].value = value
    },
    handleCheckboxChange (value, index, type) {
      if (type) {
        this.dolist[index].checked = value
        this.undolist.push(this.dolist[index])
        this.dolist.splice(index, 1)
      } else {
        this.undolist[index].checked = value
        this.dolist.push(this.undolist[index])
        this.undolist.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
section {
  width: 600px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
