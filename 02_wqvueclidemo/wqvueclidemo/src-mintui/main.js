import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'
import {Button} from 'mint-ui'

// 注册成标签（全局）
Vue.component(Button.name, Button)

// 声明使用插件
// Vue.use(VueResource) // 一旦声明使用，内部会给vm对象和组件对象添加一个属性: $http 它里面有get()、post()方法。
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
