<template>
    <div class="photo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time |dateFormat}}</span>
            <span>点击次数: {{photoinfo.click}}</span>
        </p>
        <hr>

        <!-- 缩略图 -->
        <div class="thumbs">
             <img class="preview-img" v-for="(item,index) in list" :key = "item.src" :src="item.src"  height="80" width="100" @click="$preview.open(index,list)">
        </div>
       
        
         
        
        <!-- 内容 -->
        <div class="content" v-html="photoinfo.content"></div>
         <!-- 引用评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
   
</template>

<script>

//导入 评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{
                id: 0,
                add_time: "2019-09-02T09:09:09.000Z",
                click:9,
                content: '<p>Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona Celia and Shona</p> ', //<img src="/src/images/hmbb.jpg">
                title: 'Celia'
               },
            list: [
                {
                    src: './src/images/hmbb2.jpg',
                    w: 600,
                    h: 400               
                     },
                {
                    src: './src/images/hmbb3.jpg',
                     w: 600,
                     h: 400  
                },
                {
                    src: './src/images/hmbb4.jpg',
                     w: 600,
                     h: 400  
                },
                {
                    src: './src/images/hmbb5.jpg',
                     w: 600,
                     h: 400  
                },
                {
                    src: './src/images/hmbb6.jpg',
                     w: 600,
                     h: 400  
                }

            ]
        }
    }, 
    created(){
        this.getPhotoinfo()
        this.getTHumbs()
    },
    methods:{
        getPhotoinfo() {
            this.$http.get('api/getimgInfo'+ this.id).then(result=>{
                if(result.body.status === 0) {
                    this.photoinfo = result.body.message[0]
                }
            })
        },
        getTHumbs() {
            //获取缩略图
            this.$http.get('api/getthumimg/'+ this.id).then(
               result => {
                   if(result.body.status === 0) {
                       result.body.message.foreach(item => {
                           item.w = 600
                           item.h = 400
                       })
                    //保存到list中
                    this.list = result.body.message
                   }
               } 
            )
        }
    },
    components: {
        'cmt-box':comment
        }
}
</script>

<style lang="scss" scoped>
 .photo-container{
     padding: 3px;

     h3{
         color: #26a2ff;
         font-size: 15px;
         text-align: center;
         margin: 15px 0;
         }
     .subtitle{
         display: flex;
         justify-content: space-between;
         font-size: 13px;
     }
     .content{
          font-size: 13px;
          line-height: 30px; 
     }

     .thumbs{
       img{
       margin:  10px;
       box-shadow: 0 0 8px #999;
    }
  }
     
 }

</style>

