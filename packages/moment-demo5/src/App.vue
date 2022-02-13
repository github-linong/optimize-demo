<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      打开页面的时间：{{currentTime}}
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import moment from 'moment';
export default {
  name: 'App',
  data(){
    return {
      currentTime: moment().format('YYYY-MM-DD HH:mm:ss.SSSS'),
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
