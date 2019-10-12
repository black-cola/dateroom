<template>
    <div>
        <home-header>  
        </home-header>
        <div class='home'>home</div>
            <router-link to='/list'>列表页</router-link>  //相当于a标签
            <router-link target="_blank" to='/article_list'>文章列表</router-link>
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
    * {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    a:hover {
        color: rgb(99, 163, 247);
    }
</style>