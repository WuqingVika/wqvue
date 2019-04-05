<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--自定义事件1）方式比较简单，常用，
      不过专用于父子组件之间传递，什么意思就是A传到B
      给TodoHeader标签对象绑定addTodo事件监听-->
      <!--<TodoHeader @addTodo="addTodo"/> -->
      <TodoHeader ref="wqheader"/> <!--自定义事件2）这个使用起来比较复杂，不常用-->
      <todo-list :todos="todos" />  <!--cnpm install --save pubsub-js 通过消息订阅与发布可以不光只是父子间的函数调用。-->
      <!--<todo-footer :todos="todos"
                   :deleteCompleteTodos="deleteCompleteTodos"
                   :selectAllTodos="selectAllTodos"/>-->
      <!--通过slot通信的是标签，而其他的是数据 -->
      <todo-footer>
         <input type="checkbox" v-model="isAllChecked" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}}/ 全部{{todos.length}}</span>
        <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>
<!--
绑定事件监听   ----订阅消息
触发事件  ----发布消息
-->
<script>
import PubSub from 'pubsub-js'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
  data () {
    return {
      // 从localstorage中读取todos 需要深度监视
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')/* [{
        title: '学习vue编程', compete: false
      }, {
        title: '学习java编程', compete: true
      }] */
    }
  },
  watch: {
    // 深度监视
    todos: {
      deep: true, // 代表深度监视
      handler: function (newValue) {
        // 将todos最新的值 保存到localstorage中
        window.localStorage.setItem('todos_key', JSON.stringify(newValue))
      }
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.compete ? 1 : 0), 0)
    },
    isAllChecked: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) { // value是当前checkbox的最新的值 (true/false)
        this.selectAllTodos(value)
      }
    }
  },
  mounted () { // 执行异步代码
    // 给<TodoHeader/>绑定addTodo事件监听
    // this.$on('addTodo', this.addTodo)// 给app绑定的监听，不对的！！！！！
    this.$refs.wqheader.$on('addTodo', this.addTodo)

    // 订阅消息
    PubSub.subscribe('deleteTodo', (msg, index) => {
      this.deleteTodo(index)
    })
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.compete)
    },
    // 全选/全不选
    selectAllTodos (isChecked) {
      this.todos.forEach(todo => { todo.compete = isChecked })
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
