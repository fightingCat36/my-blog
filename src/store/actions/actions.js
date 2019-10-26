import axios from "axios";

export default {
    // 获取当前文章列表
    async getArticleList (store, url, pageNum) {
        try {
            const res = await axios.get(url, {
                params: {
                    page: pageNum || 1
                }
            })
            store.commit('getArticleList', res.data.articles)
            store.commit('getPage', pageNum)
            store.commit('getCount', res.data.count || 1)
            store.commit('setPaginationState', res.data.count)
        } catch (error) {
            console.log(error)
        }
    },

    // 获取图片列表
    async getImageList (store, url) {
        try {
            const res = await axios.get(url)
            store.commit('getImageList', res.data.data)
        } catch (error) {
            console.log(error)
        }
    },

    // 获取感悟列表
    async getWisdomList (store, url) {
        try {
            const res = await axios.get(url)
            store.commit('getWisdomList', res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
}