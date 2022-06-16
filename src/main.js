import Vue from 'vue'
import VgUI from './vgui/src/index'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/styles/index.less'
Vue.use(VgUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
