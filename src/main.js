import Vue from 'vue'
import App from './App.vue'
import vueSubscribe from './lib/index.js'
Vue.use(vueSubscribe)

new Vue({
  el: '#app',
  render: h => h(App)
})
