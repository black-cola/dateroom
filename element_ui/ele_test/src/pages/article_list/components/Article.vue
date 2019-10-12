<template>
    <div >
        <ul class="clearfix one">
            <li v-for='o in newDate' :key='o.title'>
                <router-link target="_blank" to="../../Article_detail">{{ o.title }}</router-link>
                <div class="des">{{o.description}}</div>
                <div class="des">{{o.author}}<span class="author">{{o.date}}</span></div>
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
    .one {
        list-style: none;
        /* background-color: #e0e0e0; */
        /* background-color: #fff;
        border-bottom: 1px solid #c2c2c2; */
        width: 70%;
        margin-left: -10px;
        margin-bottom: 10px;
        margin-top: -7px;
    }
    li {
        border-radius: 5px;
        background-color: #fff;
        border-bottom: 1px solid #d1d1d1;
        padding-left: 15px;
    }
    li:hover {
        background-color: #f5f4f4;
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
    a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        font-weight: 700;
    }
    a:hover {
        color: rgb(99, 163, 247);
    }
    .des{
        font-size: 14px;
        color: #8a8a8a;
        margin-top: -12px; 
    }
    .author {
        float: right;
        padding-right: 20px;
    }
</style>