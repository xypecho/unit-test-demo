<template>
  <div class="undolist">
    <h2>正在进行
      <span class="count">{{ list.length }}</span>
    </h2>
    <ol>
      <li class="item undolist-item" v-for="(item,index) in list" :key="item.value" draggable="true" v-drag>
        <input class="checkbox" type="checkbox" v-model="item.checked" @change="handleCheckboxChange($event,index)">
        <p v-if="item.status === 'p'" @dblclick="changeStatus(index)">{{ item.value }}</p>
        <input v-else type="text" :value="item.value" @blur="changeInputStatus(index)" @change="hanleChange($event,index)">
        <a class="deleteButtons" @click="deleteItem(index)" href="javascript:;">-</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteItem (index) {
      this.$emit('deleteItem', index)
    },
    changeStatus (index) {
      this.$emit('changeItemStatus', index)
    },
    changeInputStatus (index) {
      this.$emit('changeInputStatus', index)
    },
    hanleChange (e, index) {
      this.$emit('hanleChange', e.target.value, index)
    },
    handleCheckboxChange (e, index) {
      this.$emit('handleCheckboxChange', e.target.checked, index)
    }
  }
}
</script>

<style scoped lang="stylus">
.undolist {
  h2 {
    position: relative;

    span {
      position: absolute;
      top: 2px;
      right: 5px;
      display: inline-block;
      padding: 0 5px;
      height: 20px;
      border-radius: 20px;
      background: #E6E6FA;
      line-height: 22px;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
  }

  ol {
    padding: 0;
    list-style: none;

    li {
      cursor: move;
      height: 32px;
      line-height: 32px;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      padding: 0 45px;
      border-radius: 3px;
      border-left: 5px solid #629A9C;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);

      .checkbox {
        position: absolute;
        top: 2px;
        left: 10px;
        width: 22px;
        height: 22px;
        cursor: pointer;
      }

      p, input {
        margin: 0;
      }

      a {
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
