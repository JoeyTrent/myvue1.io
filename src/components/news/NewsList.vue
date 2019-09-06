<template>
  <div>
    
    
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
        <!-- <router-link :to="/home/newsinfo/"> -->
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div> 
        </router-link>
      </li>

    </ul>



  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: [
         {
            "id": 1,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 2,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 3,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 4,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 5,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 6,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 7,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 8,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 9,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 7,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          },
          {
            "id": 10,
            "title": "Celia and shona ",
            "zhaiyao": "maybe it's better to do",
            "click": 11,
           "add_time": "2019-09-01T04:05:34.000Z",
           "img_url":"./src/images/menu1.png"
          }
      ]
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      
      this.$http.get("/src/api/Newslist").then(result => {
        if (result.body.status === 0) {
          // 如果没有失败，应该把数据保存到 data 上
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
         console.log(result)
      });
    }
   }
 }

</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
