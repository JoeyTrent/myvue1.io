// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//导入vuex
//从localstorerag获取car 
var car = JSON.parse(localStorage.getItem('car'||'[]'))

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    car: car, //购物车商品数据
  },
  mutations: {
      addToCar(state,goodsinfo){
          //1 已有商品 更新数量
          //2 没有 直接加入数据
          var flag = false
          state.car.some(item => {
            if(item.id == goodsinfo.id){
              item.count += parseInt(goodsinfo.count)
              flag = true
              return true
            }
          })
          if(!flag) {
            state.car.push(goodsinfo)
           }
           localStorage.setItem('car',JSON.stringify(state.car))
     }
  },
  getters: {
    getAllCount(state){
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    }
   }
 })

//导入时间插件
import moment from 'moment'

//定义全局时间过滤器
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD HH:mm:ss"){
   return moment(dateStr).format(pattern)
})


// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

//设置请求的根路径
//Vue.http.options.root = 'http://vue.studyit.io';
//emulateJson
//Vue.http.options.emulateJson = true


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
// import { Header, Swipe, SwipeItem, Button ,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

//导入mui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 1.3 导入自己的 router.js 路由模块
import router from './router.js'


// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router, // 1.4 挂载路由对象到 VM 实例上
  store
})
