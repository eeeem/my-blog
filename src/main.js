// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import VueResource from 'vue-resource'
import Vuerouter from 'vue-router'
import App from './App'
import Routes from './router'
import axios from 'axios'

Vue.config.productionTip = false


//Vue.use(VueResource)
Vue.use(Vuerouter)



axios.defaults.baseURL='https://wd8145542765vtmdwx.wilddogio.com'
// axios.defaults.headers.common['Authorization']='Token'
// axios.defaults.headers.post['Content-type']='application/urlencode'

//自定义指令
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color="#"+Math.random().toString(16).slice(2,8);
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=="wide"){
      el.style.maxWidth="1260px";
    }

    if(binding.arg=='column'){
      el.style.background="#6677cc"
      el.style.padding="20px"
    }
  }
})

//自定义过滤器
// Vue.filter("to-uppercase",(value)=>{
//   return value.toUpperCase();
// })
Vue.filter("snippet",(value)=>{
  return value.slice(0,100)+"...";
})

//创建路由
const router=new Vuerouter({
  routes:Routes,
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
