import Vue from 'vue'
import VueCookie from 'vue-cookie'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
