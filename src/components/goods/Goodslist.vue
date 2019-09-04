<template>
    <!-- <div class="goods-list">
        <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
             <img src="src/images/hmbb3.jpg" alt="">
             <h1 class="title">{{item.title}}</h1>
             <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p> 
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
             </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMoreGoods">加载更多</mt-button>
       
    </div> -->
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
             <img src="src/images/hmbb3.jpg" alt="">
             <h1 class="title">{{item.title}}</h1>
             <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p> 
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
             </div>
        </div>
        <mt-button type="danger" size="large" @click="getMoreGoods">加载更多</mt-button>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageindex: 1,
            goodslist: [
                {
                    id:0,
                    title:'Celia',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 7
                },
                {
                    id:1,
                    title:'shona',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 8
                },
                {
                    id:2,
                    title:'joey',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 9
                },
                {
                    id:3,
                    title:'trent',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 10
                },
                {
                    id:4,
                    title:'trent',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 10
                },
                {
                    id:5,
                    title:'trent',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 10
                },
                {
                    id:6,
                    title:'trent',
                    add_time: '2019-09-03T09:09:09.000Z',
                    zhaoyao: 'Celia',
                    click: 0,
                    img_url: '/src/images/hmbb3.jpg',
                    sell_price: 2196,
                    market_price: 2499,
                    stock_quantity: 10
                }
                
            ]
        }
    },
    created() {
        this.getGoodslist()
    },
    methods: {
        getGoodslist() {
            this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result => {
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message)
                }
            })
        },
        getMoreGoods() {
            this.pageindex++
            this.getGoodslist()
        },
        getDetail(id) {
            // this.$router.push({ path:"goodsinfo/" + id })
            this.$router.push(
                 { 
                     name:"goodsinfo",//
                     params: { id }
                 }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods-item{
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2px;
            min-height: 220px;
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 3px 0;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
                margin-left: 10px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px; 
                }
                .price{
                    .now{
                        color: red;
                        font-weight: blod;
                        font-size: 16px;
                    }
                    .old{
                        font-size: 12px;
                        margin-left: 15px;
                        text-decoration: line-through;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    }
                
            }
        }
    }
</style>
