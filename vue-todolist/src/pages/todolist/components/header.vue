<template>
  <div>
    <input type="text" v-model="inputValue" @keyup.enter='addTodolistItem'>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodolistItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus"></style>
