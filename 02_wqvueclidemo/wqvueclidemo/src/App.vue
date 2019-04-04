<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Wuqingvika的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
  data () {
    return {
      comments: [{
        name: 'xiaopeng',
        content: '向小吴筒子学习'
      }, {
        name: 'mengmeng',
        content: '向小吴筒子学习2'
      }]
    }
  },

  components: {
    Add,
    List
  }
}
</script>

<style scoped>

</style>
