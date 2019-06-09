<template>
    <div>
        <Head />
        <NavBar />
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