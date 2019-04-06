<template>
  <div v-if="!repoUrl">loading...</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted () {
    // 发ajax请求
    // 这是github一个免费测试接口用来根据q相关内容查找出星星（关注）数从高到低的项目
    const url = `https://api.github.com/search/repositories?q=vue&sort=stars`
    /* this.$http.get(url).then(response => {
      // 成功了
      const result = response.data
      // 得到第一个repo(最受欢迎的repo)
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }, response => {
      alert('请求失败')
    }) */

    // 使用axios发送ajax请求
    axios.get(url).then(response => {
      // 成功了
      const result = response.data
      // 得到第一个repo(最受欢迎的repo)
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }).catch(error => {
      alert('请求失败!')
    })
  }
}
</script>

<style>
</style>
