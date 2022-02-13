// // import axios11 from '../../axios-0.24.0/src/axios-1.js'
// // import axios12 from '../../axios-0.24.0/src/axios-2.js'

// // import axios21 from '../../axios-0.23.0/src/axios-1.js'
// // import axios22 from '../../axios-0.23.0/src/axios-2.js'

// // import axios31 from '../../axios-0.21.0/src/axios-1.js'
// // import axios32 from '../../axios-0.21.0/src/axios-2.js'

// // import axios41 from '../../axios-0.21.1/src/axios-1.js'
// // import axios42 from '../../axios-0.21.1/src/axios-2.js'

// // console.log(
// //     axios11, axios12,
// //     axios21, axios22,
// //     axios31, axios32,
// //     axios41, axios42
// // )

// import axios from '../../axios-0.24.0-ui/src/axios-3.js'
// console.log(axios)

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App)
});