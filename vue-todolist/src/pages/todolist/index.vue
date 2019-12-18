<template>
  <div>
    <vHeader @add='add' />
    <section>
      <undolist :list='undolist' @deleteItem='deleteItem' @changeItemStatus='changeItemStatus' @changeInputStatus='changeInputStatus' @hanleChange='hanleChange' />
    </section>
  </div>
</template>

<script>
import vHeader from './components/header'
import undolist from './components/undolist'
export default {
  components: {
    vHeader,
    undolist
  },
  data () {
    return {
      undolist: []
    }
  },
  methods: {
    add (inputValue) {
      this.undolist.push({ value: inputValue, status: 'p' })
    },
    deleteItem (index) {
      this.undolist.splice(index, 1)
    },
    changeItemStatus (index) {
      const newArr = []
      this.undolist.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newArr.push({ status: 'input', value: item.value })
        } else {
          newArr.push({ status: 'p', value: item.value })
        }
      })
      this.undolist = newArr
    },
    changeInputStatus (index) {
      const newArr = []
      this.undolist.forEach((item, itemIndex) => {
        newArr.push({ status: 'p', value: item.value })
      })
      this.undolist = newArr
    },
    hanleChange (value, index) {
      this.undolist[index].value = value
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
