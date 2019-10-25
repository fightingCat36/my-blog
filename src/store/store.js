import Vuex from 'vuex'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    // strict 开发环境使用，设置为true，只能通过commit mutations修改state,不要在正是环境使用
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    // 定制vuex插件
    plugins: [
      (store) => {
        console.log('my plugin invoked')
      }
    ]
  })

  // vuex热更替
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      // 不能在业务逻辑内部写import
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      // 每次创建一个store都需要热更替
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
