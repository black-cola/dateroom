<template>
    <div >
        <ul class="clearfix">
            <li v-for='o in newDate' :key='o.title'>
                <el-link href="">{{ o.title }}</el-link>
            </li>
        </ul>
    </div>
</template>

<script>
import bus from '@/assets/bus.js';
export default {
    name: 'ArticleTitle',
    props: ['newDate']
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    li {
        list-style: none;
    }
    .el-link {
        font-size: 20px;
    }
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
    .center {
        text-align: center;
    }
</style>