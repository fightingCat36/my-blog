<template>
    <ul class="am-pagination">
        <li class="am-pagination-prev" @click="handleBack"><a href="">« Prev</a></li>
        <li class="am-pagination-next" @click="handleNext"><a href="">Next »</a></li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ARTICLE_URL } from '../../util/const';
export default {
    name: 'pagination',
    data: () => {
        return {
            currentPage: 1
        }
    },
    mounted () {
        this.currentPage = this.page
    },
    methods: {
        handleBack () {
            if (this.currentPage > 1) {
                this.currentPage--
                this.getArticleList(ARTICLE_URL, this.currentPage)
            }
        },

        handleNext () {
            if (this.currentPage < this.count) {
                this.currentPage++
                this.getArticleList(ARTICLE_URL, this.currentPage)
            }
        },
        ...mapActions(['getArticleList'])
    },
    computed: {
        ...mapGetters({
           page: 'page',
           count: 'count' 
        })
    }
}
</script>
