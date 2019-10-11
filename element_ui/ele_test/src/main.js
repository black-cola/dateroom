// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'   //App局部组件，src目录下的App.vue文件
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },   //components：{App: App}  es6新写法  App局部组件
  template: '<App/>'
})
//路由就是根据网址的不同返回不同的内容给用户
