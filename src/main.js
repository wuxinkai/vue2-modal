import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'; // 路由
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
