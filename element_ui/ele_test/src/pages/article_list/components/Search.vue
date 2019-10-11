<template>
    
        <ul class="clearfix">
            <li v-for='o in searchData' :key='o.title'>
                <el-link href="">{{ o.title }}</el-link>
            </li>
        </ul>
    
</template>

<script>
export default {
    name: 'Search',
    props:['searchData','search'],
    methods:{
        
    }
  }
</script>

<style scoped>

.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;
    }
    li {
        list-style: none;
    }
</style>