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
            store.commit('getPage', res.data.page)
        } catch (error) {
            console.log(error)
        }
    }
}