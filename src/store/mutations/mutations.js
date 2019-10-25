import { DEFAULT_COUNT } from "../../util/const";

export default {
    getArticleList (state, articleList) {
        state.articleList = articleList
    },

    getPage (state, page) {
        state.page = page
    },

    getCount (state, count) {
        state.count = count
    },

    // 设置是否显示分页组件
    setPaginationState (state, count) {
        state.hasPagination = count > DEFAULT_COUNT ? true : false
    }
}