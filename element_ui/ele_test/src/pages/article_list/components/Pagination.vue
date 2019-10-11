<template>
    <el-pagination 
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-size="pagination.pageSize"
        background
        layout="prev, pager, next, jumper"
        :total="pagination.total">
    </el-pagination>
</template>

<script>
import bus from '@/assets/bus.js';
export default {
    name: 'Pagination',
    props: ['pagination','item'],
    methods:{
        handleSizeChange(val){
           console.log("长度改变:"+val)
       },
        // 当前改变----当前页码改变之后，触发这个函数
       handleCurrentChange(val){
        //    bus.$emit('current-change',val);
           item.splice(pagination.pageSize(val-1),pagination.pageSize);
           console.log("当前改变："+val);
       }
    }
    
}
</script>

<style scoped>
.el-pagination {
    text-align: center;
}
</style>