<template>
  <div>

    <!-- 轮播图区域 -->

    <swiper :lunbotuList = "lunbotuList" :isfull="true"></swiper>

    
  <!-- <mt-swipe :auto="4000">
     <mt-swipe-item>1</mt-swipe-item>
     <mt-swipe-item>2</mt-swipe-item>
     <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe> -->




   <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
			</ul>  -->

    <!-- 九宫格 到 6宫格 的改造工程 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to = "/home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to = "/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to= "/home/goodslist" >
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul> 

  </div>
</template>

<script>
import { Toast } from "mint-ui";


//轮播图组件
import swiper  from '../subcomponents/swiper.vue'

export default {
  data() {
    return {
      lunbotuList: [
        {
            "id": 1,
            "title":"Celia and shona",
            "add_time": "2019-09-01T09:09:09.000Z",
            "zhaiyao": "i and you",
            "click": 7,
            "img_url": "./src/images/hmbb.jpg"
        },
        {
            "id": 1,
            "title":"Celia and shona",
            "add_time": "2019-09-01T09:09:09.000Z",
            "zhaiyao": "i and you",
            "click": 7,
            "img_url": "./src/images/hmbb2.jpg"
        },
        {
            "id": 1,
            "title":"Celia and shona",
            "add_time": "2019-09-01T09:09:09.000Z",
            "zhaiyao": "i and you",
            "click": 7,
            "img_url": "./src/images/hmbb3.jpg"
        }
      ] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("/src/api/lunbo").then(result => {
        console.log(result.body);
        if (result.body.status === 0) {
          // 成功了
          this.lunbotuList = result.body.message;
        } else {
          // 失败的
          Toast("加载轮播图失败。。。");
        }
      });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss" scoped>
// .mint-swipe {
//   height: 200px;

//   .mint-swipe-item {
//     &:nth-child(1) {
//       background-color: red;
//     }
//     &:nth-child(2) {
//       background-color: blue;
//     }
//     &:nth-child(3) {
//       background-color: rgb(53, 180, 180);
//     }

//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
// }

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
