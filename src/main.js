import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import store from './store'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere
Vue.use(VueAnimXYZ)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
