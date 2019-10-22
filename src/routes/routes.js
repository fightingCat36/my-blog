export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        component: () => import('../layout/HomePage.vue'),
        name: 'app',
        meta: {
            title: 'this is homepage'
        }
    },
    {
        path: '/picture',
        component: () => import('../layout/ImageList.vue'),
        name: 'picture'
    },
    {
        path: '/article/:id',
        component: () => import('../layout/Article.vue'),
        name: 'article'
    },
    // 404页面
    {
        path: '*',
        component: () => import('../layout/NotFound.vue')
    }
]