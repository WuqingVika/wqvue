<template>
  <!--
  onmouseenter=""  触发外面
  onmouseleave="" 外面
  onmouseover=""  里面元素
  onmouseout="" 里面元素-->
  <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.compete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    todo: Object,
    index: Number/*,
    deleteTodo: Function */
  },
  data () {
    return {
      bgColor: 'white', // 标示默认的背景颜色
      isShow: false // 标示删除按钮默认是否显示
    }
  },
  methods: {
    handleShow (isShow) {
      if (isShow) {
        this.bgColor = '#cccccc'
        this.isShow = true
      } else {
        this.bgColor = '#ffffff'
        this.isShow = false
      }
    },
    deleteItem () {
      const {todo, index} = this
      // const {todo, index, deleteTodo} = this
      if (window.confirm(`确认删除${todo.title}`)) {
        // deleteTodo(index)
        // 发布消息
        PubSub.publish('deleteTodo', index)
      }
    }
  },
  name: 'TodoItem'
}
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
