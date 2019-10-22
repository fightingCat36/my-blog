import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import createRouter from './routes/router'

Vue.config.productionTip = false

Vue.use(Router)

const router = createRouter()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
