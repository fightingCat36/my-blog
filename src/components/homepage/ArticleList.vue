<template>
    <div class="am-u-md-8 am-u-sm-12">
        <article v-for="item of articleList" :key="item.key" class="am-g blog-entry-article">
            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-img">
                <img :src="item.cover" alt="" class="am-u-sm-12">
            </div>
            <div class="am-u-lg-6 am-u-md-12 am-u-sm-12 blog-entry-text">
                <span> @catboy &nbsp;</span>
                <span>{{item.time}}</span>
                <h1><router-link :to = "{path: '/article/' + item.id}">{{item.title}}</router-link></h1>
                <p>{{item.description}}</p>
            </div>
        </article>      
        <pagination />
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import { ARTICLE_URL } from '../../util/const'
import Pagination from '../common/Pagination.vue'
import '../../../mock/mock.js'
export default {
    name: 'articleList',
    data: () => {
        return {
            // articleList: []
        }
    },
    created () {
        const url = ARTICLE_URL
        this.getArticleList(url)
    },
    methods: {
        ...mapActions(['getArticleList'])
    },
    computed: {
        ...mapGetters({
            articleList: 'articleList'
        })
    },
    components: {
        Pagination
    }
}
</script>



