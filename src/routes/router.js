import Router from 'vue-router'

import routes from './routes'

export default () => {
    return new Router({
        routes,
        mode: 'history',
        // 页面路径跳转时，页面是否滚动,如果之前进入过此路由
        // savedPosition会保存滚动条之前所在位置，to/from是路由对象
        scrollBehavior (to, from, savedPosition) {
            if (savedPosition) {
              return savedPosition
            } else {
              return {x: 0, y: 0}
            }
        },
        // 不是所有浏览器都支持history路由方式，在不支持的浏览器里，fallback到hash模式(true)
        fallback: true
    })
}