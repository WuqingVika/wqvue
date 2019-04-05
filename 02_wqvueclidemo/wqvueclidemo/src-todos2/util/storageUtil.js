/*
* 使用localStorage存储数据的工具模块
* 1。函数
* 2。对象
* 依据： 向外暴露1个功能（函数）； 多个功能（对象）
*
* 在这里由于我们要进行读、写两个功能，所以对外暴露对象。
* */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
