<template>
  <div id="app">
    <EditorMD v-show="showEditor === 'EditorMD'"></EditorMD>
    <EditorUEdit v-show="showEditor === 'EditorUEdit'"></EditorUEdit>
    <EditorTextArea v-if="showEditor === 'EditorTextArea'"></EditorTextArea>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="showEditor = 'EditorMD'"> showEditor = 'EditorMD' </button>
    <button @click="showEditor = 'EditorUEdit'"> showEditor = 'EditorUEdit' </button>
    <button @click="showEditor = 'EditorTextArea'"> showEditor = 'EditorTextArea' </button>
    <hr>
    <button @click="download">下载</button>
    <table>
        <tr>
          <th v-for="item in 10" :key="item">表头{{item}}</th>
        </tr>

        <tr v-for="item1 in 10" :key="item1">
          <th v-for="item2 in 10" :key="item2">内容 {{item1}}.{{item2}}</th>
        </tr>
    </table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import EditorMD from './components/Editor-MD.vue'
// import EditorUEdit from './components/Editor-UEdit.vue'
// import xlsx from 'js-xlsx'
// console.log('xlsx', xlsx)

export default {
  name: 'App',
  data(){
    return {
      showEditor: 'EditorMD'
    }
  },
  methods:{
    download(){
      import('js-xlsx').then((xlsx)=>{
        console.log('xlsx', xlsx)
      })
    }
  },
  components: {
    HelloWorld,
    EditorMD: () => import(/* webpackChunkName: 'EditorMD' */'./components/Editor-MD.vue'),
    EditorUEdit: () => import(/* webpackChunkName: 'EditorUEdit' */'./components/Editor-UEdit.vue'),
    EditorTextArea: () => import(/* webpackChunkName: 'EditorTextArea' */'./components/Editor-TextArea.vue')
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
