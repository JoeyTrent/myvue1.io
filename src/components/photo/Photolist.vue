<template>
    <div class="prev">
       <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll" >
				   <a :class="['mui-control-item' , item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap = "getPhotoListByCateId(item.id)">
						{{item.title}}
				   </a>
				</div>
		     </div>
		</div>
         <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                     <img v-lazy="item.img_url" alt="">
                    <div class="info">
                        <h1 class="info-title">{{item.title}}</h1>
                        <div class="info-body">{{item.zhaiyao}}
                       </div>
                    </div>
            </router-link>
        </ul>

    </div>
</template>

<script>
//导入muijs 初始化滑动
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return {
            cates: [
            { title: "全部", id: 0},
            { title: "Celia", id: 1},
            { title: "shona", id: 2},
            { title: "jan", id: 3},
            { title: "joey", id: 4},
            { title: "trent", id: 5},
            { title: "包子", id: 6},
            { title: "三胖", id: 7},
            { title: "喜欢你", id: 8}
            ],
            list: [
                {
                    id: 0,
                    img_url:'./src/images/hmbb.jpg',
                    title: 'celia',
                    zhaiyao: 'shona  shona'
                },
                {
                    id: 1,
                    img_url:'./src/images/hmbb2.jpg',
                    title: 'celia',
                    zhaiyao: 'shona  shona'
                },
               {
                    id: 2,
                    img_url:'./src/images/hmbb3.jpg',
                    title: 'celia',
                    zhaiyao: 'shona  shona'
                },
                {
                    id: 3,
                    img_url:'./src/images/hmbb4.jpg',
                    title: 'celia',
                    zhaiyao: 'shona  shona'
                },
                {
                    id: 4,
                    img_url:'./src/images/hmbb5.jpg',
                    title: 'celia',
                    zhaiyao: 'shona  shona'
                },
                {
                    id: 5,
                    img_url:'./src/images/hmbb6.jpg'
                },
                {
                    id: 6,
                    img_url:'./src/images/hmbb7.jpg'
                },
                {
                    id: 7,
                    img_url:'./src/images/hmbb8.jpg'
                },
                {
                    id: 8,
                    img_url:'./src/images/hmbb9.jpg'
                }
            ]
        }
    },
    created(){
        this.getAllCategory()
        //默认 请求分类全部的图片
        this.getPhotoListByCateId(0)
    },
    mounted() {
			mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
        },
    methods: {
        getAllCategory() {
            this.$http.get('api.getimgcategory').then(result => {
                if(result.body.status === 0){
                    result.body.message.unshift({ title: "全部", id: 0})
                    this.cates = result.body.message
                }
            })
        },
        getPhotoListByCateId(id) {
            this.$http.get('api/getimg/'+ id).then(result => {
                if(result.body.status === 0){
                    this.list = result.body.message
                }
            })
        }
    }
}


</script> 


<style lang="scss" scoped>
   *{
		touch-action: pan-y;
	}

    .photo-list{
        list-style: none ;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            background-color: #ccc ;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 16px #999;
            position: relative;
            img{
                width: 100%;  
                vertical-align: middle;
            }
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
               }

            .info{
                position: absolute;
                bottom: 0;
                color: white;
                text-align: left;
                background-color:rgba(0,0,0,0.4);
                max-height: 80px;
                min-height: 60px;
                width: 100%;
                .info-title{
                    font-size: 14px
                }
                .info-body{
                    font-size: 13px
                }
            }
          }
    }

   
</style>
