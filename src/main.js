import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { createApi } from 'unsplash-js'

Vue.config.productionTip = false

const api = new createApi({
  accessKey: 'e6MD8Gpf5agAWPP4BsapuMe7Htj7sOSXMluIMTbuAXo'
})

Vue.prototype.$unsplash = api
Vue.prototype.$axios = axios
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
