<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <todo-list :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos"
                   :deleteCompleteTodos="deleteCompleteTodos"
                   :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
  data () {
    return {
      todos: [{
        title: '学习vue编程', compete: false
      }, {
        title: '学习java编程', compete: true
      }]
    }
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
