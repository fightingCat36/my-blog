<template>
    <header class="am-g am-g-fixed blog-fixed blog-text-center blog-header">
        <div class="am-u-sm-8 am-u-sm-centered">
            <img width="200" src="http://s.amazeui.org/media/i/brand/amazeui-b.png" alt="Amaze UI Logo">
            <h2 class="am-hide-sm-only">{{title}}</h2>
        </div>
    </header>
</template>

<script>
export default {
    name: 'commonHead',
    data: () => {
        return {
            title: '这里是一只有理想的猫的博客',
            image: ''
        }
    }
}
</script>

<style scoped>

</style>
