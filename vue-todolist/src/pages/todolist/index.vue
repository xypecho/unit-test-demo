<template>
  <div>
    <vHeader @add='add' />
    <section>
      <undolist :list='undolist' @deleteItem='deleteItem' />
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
      this.undolist.push(inputValue)
    },
    deleteItem (index) {
      this.undolist.splice(index, 1)
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
