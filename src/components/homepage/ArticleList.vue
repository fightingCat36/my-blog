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
        <ul class="am-pagination">
            <li class="am-pagination-prev"><a href="">« Prev</a></li>
            <li class="am-pagination-next"><a href="">Next »</a></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { ARTICLE_URL } from '../../util/const'
import '../../../mock/mock.js'
export default {
    name: 'articleList',
    data: () => {
        return {
            articleList: []
        }
    },
    created () {
        const url = ARTICLE_URL
        axios.get(url).then((res) => {
            this.articleList = res.data.data
        }).catch((err) => {
            console.log(err)
        })
    },
    components: {

    }
}
</script>



