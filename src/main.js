import Vue from 'vue'
import App from './App'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
