<template>
  <div>
    <vHeader @add='add' />
  </div>
</template>

<script>
import vHeader from './components/header'
export default {
  components: {
    vHeader
  },
  data () {
    return {
      undolist: []
    }
  },
  methods: {
    add (inputValue) {
      this.undolist.push(inputValue)
    }
  }
}
</script>

<style scoped lang="stylus"></style>
