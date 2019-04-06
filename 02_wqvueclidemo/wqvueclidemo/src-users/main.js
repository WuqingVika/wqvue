// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App'

// 声明使用插件
// Vue.use(VueResource) // 一旦声明使用，内部会给vm对象和组件对象添加一个属性: $http 它里面有get()、post()方法。
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
