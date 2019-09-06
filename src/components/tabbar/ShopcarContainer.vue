<template>
  <div class="shopcar-container">
    <!-- 商品列表区域 -->
    <div class="goods-list">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
            <img :src="item.img_url" alt="">
            <div class= "info">
                <h1>{{item.title}}</h1>
                <p>
                  <span class="price">￥{{item.sell_price}}</span>
                  <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                  <!-- 从购物车 获取 数量
                  空对象  {id：count}
                   -->
                  <a href="javascript:;" @click.prevent="remove(item.id,i)">删除</a>
                  </p>
            </div>
					</div>
				</div>
			</div>
    </div>
    <!-- 结算区 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计(不含运费)</p>
              <p>已勾选商品 <span class= "red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件，总价:￥<span class= "red">{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
            </div>
            <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
      <p>{{$store.getters.getGoodsSelected}}</p>
  </div>
</template>

<script>
  import numbox from '../subcomponents/shopcar_numbox.vue'
  
  export default{
    data(){
        return {
          goodslist: [
           
          ]
        }
    },
    created(){
      this.getGoodsList()
      this.Fakeinitdata()
    },
    methods:{
      getGoodsList(){
        var idArr =[]
        this.$store.state.car.forEach(
          item => idArr.push(item.id)
        )
        if(idArr.length <= 0) return
        this.$http.get('api/goods/getshopcarlist'+idArr.join(',')).then(
          result => {
            if(result.body.status === 0){
              this.goodslist = result.body,message
            }
          }
        )
      },
      //enenenenen  为了避免展示的问题可以直接从 本地拿数据
      Fakeinitdata(){
         this.goodslist = JSON.parse(localStorage.getItem('car'))
      },
      remove(id, index){
         //删除 store 和 goodslist对应的
         this.goodslist.splice(index,1)
         this.$store.commit('removeFromCar',id)
      },
      selectedChanged(id,val){
          this.$store.commit('updateGoodsSelected',{id, selected: val})
      }

    },
    components:{
      numbox
    }
  }
</script>

<style lang="scss" scoped>
    .shopcar-container{
      background-color: #eee;
      overflow: hidden;

      .mui-card-content-inner{
        display:flex;
        align-items: center;
        justify-content: space-evenly;

      }
      .goods-list{
          img{
            width: 60px;
            height: 60px;
          }
          h1{
            font-size: 13px;
          }
          .info{
            height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .price{
               color: red;
               font-weight: blod;
             }
             p{
               margin: 0;
               a{
                 margin-left:6px;
               }
             }
          }
      }
      .jiesuan{
        display: flex;
        justify-content: space-between;
        .red{
          color: red;
          font-size: 16px;
          font-weight: blod;
        }
      }
    }

</style>
