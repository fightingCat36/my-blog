<template>
    <div class="blog-sidebar-widget blog-bor">
        <h2 class="blog-title"><span>心路历程</span></h2>
        <ul class="am-list">
            <li v-for="item of wisdomList" :key="item.key">
                <a href="#">{{item.topic}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { WISDOM_URL } from '../../util/const';
export default {
    name: 'famousSentence',
    mounted () {
        this.getWisdomList(WISDOM_URL)
    },
    methods: {
        ...mapActions(['getWisdomList'])
    },
    computed: {
        ...mapGetters({
            wisdomList: 'wisdomList'
        })
    }
}
</script>
