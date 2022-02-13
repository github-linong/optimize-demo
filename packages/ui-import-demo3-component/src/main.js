import Vue from 'vue'
console.log(Vue)
    // import App from './App.vue'
    // // import store from './store'

// Vue.config.productionTip = false

// new Vue({
//     // store,
//     render: h => h(App)
// }).$mount('#app')


// import Vue from 'vue';
import {
    Button,
    Select,
    Tabs
} from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
// Vue.component(Select.name, Select); // 有大量依赖
Vue.component(Tabs.name, Tabs);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
    el: '#app',
    render: h => h(App)
});

console.log('https://www.lilnong.top/cors/1')