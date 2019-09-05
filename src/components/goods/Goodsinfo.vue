<template>
    <div class="goodsinfo-container">
            <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter" >
                 <div class="ball" v-show="ballflag" ref="ball"></div>
            </transition>
        <!-- 轮播图 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList = "lunbotu" :isfull="false"></swiper>
				</div>
			</div>
		</div>

        <!-- 购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        市场价： <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价： <span class="now_price">￥{{goodsinfo.sell_price}}</span>
                    </p>
                    <p>购买数量：<numbox  :max="goodsinfo.stock_quantity"   @getcount="getSelectedcount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToshopCart">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>
        <!-- 商品参数 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <p>商品货号:{{goodsinfo.goods_note}}</p>
                    <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                    <p>上架时间:{{goodsinfo.add_time|dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type = "primary" size = "large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type = "danger" size = "large" plain @click="goComment(id)">商品评论</mt-button> 
            </div>
		</div>

    </div>
</template>

<script>

import swiper from '../subcomponents/swiper.vue'
//数字组件
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
        return {
            id: this.$route.params.id,
            lunbotu: [
                {
                    img_url: '/src/images/hmbb5.jpg'
                },
                {
                    img_url: '/src/images/hmbb6.jpg'
                },
                {
                    img_url: '/src/images/hmbb7.jpg'
                },
                {
                    img_url: '/src/images/hmbb8.jpg'
                }
            ],
            goodsinfo: {
                id: 1,
                add_time: '2019-09-04T09:09:09.000Z',
                goods_note: 's12334445355',
                market_price: '2699',
                sell_price: '10999',
                stock_quantity: 4,
                title: 'Celia and Shona',
               },
            ballflag: false,
            selectedCount: 1
        }
    },
    created() {
        this.getLunbo()
    },
   
    methods: {
        getLunbo() {
            this.$http.get("api/getthumimg" + this.id).then(result => {
                if(result.body.status === 0){
                    //添加img 属性 因为轮播组件的问题
                    result.body.message.forEach(item => {
                        item.img = item.src_url
                    })
                    this.lunbotu = result.body.message
                }
            })
        },
        getGoodsinfo() {
            this.$http.get('api/goods/getinfo' + this.id).then(
                result => {
                    if(result.body.status === 0){
                        this.goodsinfo = result.body.message[0]
                    }
                }
            )
        },
        goDesc(id){
            this.$router.push({
                name: "goodsDesc",
                params: {
                    id
                }
            })
        },
        goComment(id){
            this.$router.push({
                name: "goodsComment",
                params: {
                    id
                }
            })
        },
        addToshopCart(){
            this.ballflag = !this.ballflag
            var goodsinfo = {
                id: this.id, count: this.selectedCount, price: this.goodsinfo.sell_price ,
                selected: true
                            }
            this.$store.commit('addToCar', goodsinfo)
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetWidth
            //球位置 标位置
            const ballPosition = this.$refs.ball.getBoundingClientRect()
            const badgePosition = document.querySelector('#badge').getBoundingClientRect()
            const xDist = badgePosition.left - ballPosition.left
            const yDist = badgePosition.top - ballPosition.top
            
            
            el.style.transform = `translate(${xDist}px,${yDist}px)`
            el.style.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)'
            done()
           
        },
        afterEnter(el){
            this.ballflag = !this.ballflag
        },
        getSelectedcount(count){
            this.selectedCount = count;
           console.log('父组件收到的数据' +this.selectedCount)
        }
    },
    components: {
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
   .goodsinfo-container{
       background-color: #eee;
       overflow: hidden;

       .now_price{
           color: red;
           font-size: 16px;
           font-weight: blod;
       }
   }

   .mui-card-footer{
       display: block;
       button{
          margin: 15px 0; 
       }
   }
   .ball{
       width: 15px;
       height: 15px;
       border-radius: 50%;
       background-color: red;
       position: absolute;
       z-index: 999;
       top: 390px;
       left: 149px;
   }
</style>
