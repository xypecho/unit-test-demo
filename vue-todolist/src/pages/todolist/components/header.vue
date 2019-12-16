<template>
  <div class="header">
    <section>
      <label for="ToDoList">ToDoList</label>
      <input type="text" v-model="inputValue" @keyup.enter='addTodolistItem'>
    </section>
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

<style scoped lang="stylus">
.header {
  height: 50px;
  background: #333;
  background: rgba(47, 47, 47, 0.98);

  section {
    width: 600px;
    padding: 0 10px;
    margin: 0 auto;

    label {
      float: left;
      width: 100px;
      line-height: 50px;
      color: #DDD;
      font-size: 24px;
      cursor: pointer;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    input {
      float: right;
      width: 60%;
      height: 24px;
      margin-top: 12px;
      text-indent: 10px;
      border-radius: 5px;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
      border: none;
    }
  }
}
</style>
