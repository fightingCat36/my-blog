<template>
    <div class="am-u-md-4 am-u-sm-12 blog-sidebar">
        <about-me />
        <contact-me />
        <tag />
        <famous-sentence />
    </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import ContactMe from './ContactMe.vue'
import Tag from './Tag.vue'
import FamousSentence from './FamousSentence.vue'

export default {
    name: 'sider',
    components: {
        AboutMe,
        ContactMe,
        Tag,
        FamousSentence
    }
}
</script>
