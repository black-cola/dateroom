<template>
    <div>
        <div class='home'>home</div>
        <router-link to='/list'>列表页</router-link>  //相当于a标签
        <home-header></home-header>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
export default {
    name:'Home',
    components: {
        HomeHeader
    }
}
</script>
<style>
    .home {
        font-size: 50px;
    }
</style>