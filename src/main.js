import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import createRouter from './routes/router'
import createStore from './store/store'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 订阅，只不过监听action的变化
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
