<template>
  <Common>
      <Carousel />
      <template v-slot:slotBody>
          <article-list />
      </template>
      <template v-slot:slotSider>
          <sider />
      </template>
  </Common>
</template>

<script>
import Common from './Common.vue'
import Carousel from '../components/homepage/Carousel.vue'
import ArticleList from '../components/homepage/ArticleList.vue'
import Sider from '../components/common/Sider.vue'

export default {
  name: 'common',
  components: {
      Common,
      Carousel,
      ArticleList,
      Sider
  }
}
</script>
