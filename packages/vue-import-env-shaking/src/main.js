// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// if (false) {
//     console.log('lilnong-1', `false`)
//     const component = await (async() => await
//         import ('./components/a.vue'));
//     console.log('lilnong-1', `false`, component)
// }

// if (process.env.NODE_ENV === 'development') {
//     console.log('lilnong-1', `process.env.NODE_ENV === 'development'`)
//     const component = await (async() => await
//         import ('./components/b.vue'));
//     console.log('lilnong-1', `process.env.NODE_ENV === 'development'`, component)
// }

// if (localStorage.debug) {
//     console.log('lilnong-1', `localStorage.debug`)
//     const component = await (async() => await
//         import ('./components/c.vue'));
//     console.log('lilnong-1', `localStorage.debug`, component)
// }

export default async function testFunction1() {
    if (false) {
        console.log('lilnong-1', `false`)
        const component = await (async() => await
            import ('./components/d.vue'));
        console.log('lilnong-1', `false`, component)
    }

    if (process.env.NODE_ENV === 'development') {
        console.log('lilnong-1', `process.env.NODE_ENV === 'development'`)
        const component = await (async() => await
            import ('./components/e.vue'));
        console.log('lilnong-1', `process.env.NODE_ENV === 'development'`, component)
    }

    if (localStorage.debug) {
        console.log('lilnong-1', `localStorage.debug`)
        const component = await (async() => await
            import ('./components/f.vue'));
        console.log('lilnong-1', `localStorage.debug`, component)
    }

}