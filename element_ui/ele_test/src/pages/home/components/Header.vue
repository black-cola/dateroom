<template>
    <div>
        <el-container>
            <el-header>Header
                <ul class="nav_box">
                    <li><a target="_black" href="">首页</a></li>
                    <li><a target="_black" href="https://www.w3school.com.cn/html/index.asp">HTML</a></li>
                    <li><a target="_black" href="https://www.w3school.com.cn/css/index.asp">CSS</a></li>
                    <li><a target="_black" href="">JavaScript</a></li>
                    <li><a target="_black" href="https://jquery.com/">JQuery</a></li>
                    <li><a target="_black" href="https://cn.vuejs.org/">VUE</a></li>
                    <li><a target="_black" href="https://react.docschina.org/">React</a></li>
                </ul>
            </el-header>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style scoped>
.el-header {
    background-color: rgb(99, 163, 247);
    color: #333;
    text-align: center;
    line-height: 45px;
    height:45px ! important;
    box-shadow: 0 2px 2px #7dbef3;
  }
  .nav_box {
      list-style: none;
      line-height: 43px;
      height:43px;
      float:left;
      padding-left: 20px; 
  }
  .nav_box li {
      float: left;
  }
  a {
      text-decoration: none;
      color: #fff;
      display: block;
      padding: 0 20px;
      font-size: 16px;

  }
  a:hover {
      border-bottom: 2px solid #fff;
  }
</style>