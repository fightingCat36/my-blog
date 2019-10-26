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
    },

    // 设置图片列表
    getImageList (state, imageList) {
        state.imageList = imageList
    },

    // 设置感悟列表
    getWisdomList (state, wisdomList) {
        state.wisdomList = wisdomList
    }
}