<template>
  <div class="undolist">
    <h2>已经完成
      <span class="count">{{ dolist.length }}</span>
    </h2>
    <ol>
      <li class="item" v-for="(item,index) in dolist" :key="item.value">
        <input class="checkbox" v-model="item.checked" type="checkbox" @change="handleCheckboxChange($event,index)">
        <p v-if="item.status === 'p'">{{ item.value }}</p>
        <input v-else type="text" :value="item.value">
        <a class="deleteButtons" @click="deleteItem(index)" href="javascript:;">-</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    dolist: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    deleteItem (index) {
      this.$emit('deleteItem', index, 'dolist')
    },
    handleCheckboxChange (e, index) {
      this.$emit('handleCheckboxChange', e.target.checked, index, 'dolist')
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
      height: 32px;
      line-height: 32px;
      background: #fff;
      position: relative;
      margin-bottom: 10px;
      padding: 0 45px;
      border-radius: 3px;
      border-left: 5px solid #629A9C;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
      border-left: 5px solid #999;
      opacity: 0.5;

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
