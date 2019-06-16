<template>
    <div>
        <Head />
        <NavBar />
        <slot></slot>
        <div class="am-g am-g-fixed blog-fixed">
          <slot name="slotBody"></slot>
          <slot name="slotSider"></slot>
        </div>
        <Footer />
    </div>
</template>

<script>
import Head from '../components/common/Head.vue'
import NavBar from '../components/common/NavBar.vue'
import Footer from '../components/common/Footer.vue'

export default {
  name: 'common',
  components: {
    Head,
    NavBar,
    Footer
  }
}
</script>