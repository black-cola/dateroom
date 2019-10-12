<template>
  <div class="safetyInfo">
  	<input type="text" name="" id="" placeholder="搜索" v-model="search"/> 
  	<button @click="btn">搜索</button>
  	<ul v-for="list in searchData" :key="list.name">
  		<li>
  			<span>{{list.name}}</span>
  			<span>{{list.date}}</span>
  			<span>{{list.depart}}</span>
  		</li>
  	</ul>
  </div>
</template>
 
<script>
export default {
  name: 'List',
  data () {
    return {
    	search:'',
    	searchData: '',
			products:[
        //假数据
        {name:"数据1",date:'2018-01-04',depart:'泸化工1'},
        {name:"数据2",date:'2018-01-25',depart:'泸化工2'},
        {name:"数据3",date:'2018-02-10',depart:'泸化工3'},
        {name:"数据4",date:'2018-03-04',depart:'泸化工4'},
        {name:"数据5",date:'2018-05-24',depart:'泸化工5'},
        {name:"数据6",date:'2018-10-29',depart:'泸化工6'}
    	]
    }
  },
  methods:{
  	btn:function(){
  		
  		var search = this.search;
			if (search) {
			 this.searchData =  this.products.filter(function(product) {
			 	console.log(product)
				return Object.keys(product).some(function(key) {
					console.log(key)
			  	return String(product[key]).toLowerCase().indexOf(search) > -1
			})
			})
			}
			
  	}
  }
}
</script>
