import VueRouter from 'vue-router'

// 导入对应的路由组件
//懒加载 启动啦！！！
// import HomeContainer from './components/tabbar/HomeContainer.vue'
// import MemberContainer from './components/tabbar/MemberContainer.vue'
// import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
// import SearchContainer from './components/tabbar/SearchContainer.vue'
// import NewsList from './components/news/NewsList.vue'
// import NewsInfo from './components/news/NewsInfo.vue'
// import Photolist from './components/photo/Photolist.vue'
// import Photoinfo from './components/photo/Photoinfo.vue'
// import Goodslist from './components/goods/Goodslist.vue'
// import Goodsinfo from './components/goods/Goodsinfo.vue'
// import GoodsDesc from './components/goods/GoodsDesc.vue'
// import GoodsComment from './components/goods/GoodsComment.vue'

// const Foo = () => import('./Foo.vue')
const HomeContainer = () => import( './components/tabbar/HomeContainer.vue')
const MemberContainer = () => import( './components/tabbar/MemberContainer.vue')
const ShopcarContainer = () => import( './components/tabbar/ShopcarContainer.vue')
const SearchContainer = () => import( './components/tabbar/SearchContainer.vue')
const NewsList = () => import( './components/news/NewsList.vue')
const NewsInfo = () => import( './components/news/NewsInfo.vue')
const Photolist = () => import( './components/photo/Photolist.vue')
const Photoinfo = () => import( './components/photo/Photoinfo.vue')
const Goodslist = () => import( './components/goods/Goodslist.vue')
const Goodsinfo = () => import( './components/goods/Goodsinfo.vue')
const GoodsDesc = () => import( './components/goods/GoodsDesc.vue')
const GoodsComment = () => import( './components/goods/GoodsComment.vue')

// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path : '/home/newslist', component : NewsList },
    { path : '/home/newsinfo/:id', component: NewsInfo},
    // { path : '/home/newsinfo', component: NewsInfo}
    { path : '/home/photolist', component: Photolist},
    { path : '/home/photoinfo/:id', component: Photoinfo},
    { path : '/home/goodslist', component: Goodslist},
    { path : '/home/goodsinfo/:id', component: Goodsinfo, name: 'goodsinfo'},
    { path : '/home/goodsDesc/:id', component: GoodsDesc, name: 'goodsDesc'},
    { path : '/home/goodsComment/:id', component: GoodsComment, name: 'goodsComment'}
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
}) 

// 把路由对象暴露出去
export default router
//这是