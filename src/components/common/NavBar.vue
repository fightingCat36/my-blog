<template>
    <nav class="am-g am-g-fixed blog-fixed blog-nav">
        <div class="am-collapse am-topbar-collapse" id="blog-collapse">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="am-active"><router-link to="/">首页</router-link></li>
                <li><router-link to="/picture">图片长廊</router-link></li>
            </ul>
            <!-- <form class="am-topbar-form am-topbar-right am-form-inline" role="search">
            <div class="am-form-group">
                <input type="text" class="am-form-field am-input-sm" placeholder="搜索">
            </div>
            </form> -->
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navBar',
  components: {
    
  }
}
</script>

<style scoped>
.nav-btn {
    cursor: pointer;
}
</style>

