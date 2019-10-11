<template>
    <div>
      <el-container>
        <el-header>Header
          
        </el-header>
          <div class="search-box">
        <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            size="small">
   
        </el-input>
        <el-row>
            <el-button icon="el-icon-search" circle size="small" @click="handleClickSearch"></el-button>
        </el-row>
        </div>
        
        <el-container>
          <el-aside width="150px">Aside</el-aside>
          <el-main>Main
            <article-title :newDate="newData"></article-title>
            <el-pagination 
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.currentPage"
              :page-size="pagination.pageSize"
              background
              layout="prev, pager, next, jumper"
              :total="pagination.total">
            </el-pagination>
            <search :searchData="searchData" :search="search" ></search>
          </el-main>
        </el-container>
    </el-container>
        
        <!-- <pagination :pagination="pagination" :item="tableData"></pagination> -->
        
    </div>
</template>

<script>
import ArticleTitle from './components/Article'
import Search from './components/Search'
// import Pagination from './components/Pagination'
export default {
    name: 'Article_list',
    data() {
        return {
        newData:[],
        search:'',
    	  searchData: '',
        tableData: [{
          date: '2016-05-02',
          title: 'Vue是什么',
          id: '000',
          description: '渐进式框架',
          author: '王小虎'
        }, {
          date: '2016-05-02',
          title: 'vueX是什么',
          id: '001',
          description: '渐进式框架',
          author: 'cola'
        }, {
          date: '2016-05-02',
          title: 'css3是什么',
          id: '002',
          description: '渐进式框架',
          author: '王小虎'
        }, {
          date: '2016-05-02',
          title: '清除浮动的方法有哪些',
          id: '003',
          description: '渐进式框架',
          author: '王小一'
        },
        {
          date: '2016-05-02',
          title: '清除浮动的方法',
          id: '004',
          description: '渐进式框架',
          author: '王小一'
        },
        {
          date: '2016-05-02',
          title: 'web前端需要学习什么',
          id: '005',
          description: '渐进式框架',
          author: '王小一'
        },
        {
          date: '2016-05-02',
          title: '333',
          id: '006',
          description: '渐进式框架',
          author: '王小一'
        }],
        pagination: {currentPage:1,
            pageSize:3,
            total:7
            }
      }
    },
    components: {
        ArticleTitle,
        Search
        // Pagination 
    },
    methods:{
      
        handleSizeChange(val){
           console.log("长度改变:"+val)
       },
       handleCurrentChange(val,currentPage){
          //  console.log("当前改变："+val);
        this.newData = this.tableData.slice((val-1) * this.pagination.pageSize,val * this.pagination.pageSize);
          //  console.log(val);
       },
       handleClickSearch(){
          let search = this.search;
          // console.log(search);
          // console.log(this.tableData);
			    if (search) {
			      this.searchData = this.tableData.filter(function(item) {
              return Object.keys(item).some(function(key) {
                 // console.log(key)
                 if(key == 'title'){
return String(item[key]).toLowerCase().indexOf(search) > -1
                 }
			  	       
			         })
			 	    
			      })
			    }
        }
    }

}
</script>

<style>
.el-pagination {
  text-align: center;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    line-height: 40px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .search-box {
    position:absolute;
    width: 100%;  
    right:0;
    /* background-color: pink; */
    margin-top: 15px;
}
.el-input {
    float:right;
    width:20%;
    margin-bottom: 20px;
    margin-right: 170px;
}
.el-row {
    float: right;
    right: -300px;
    
}
</style>