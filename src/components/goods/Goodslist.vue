<template>
    <div class="goods-list">
        <div class="goods-item">
             <img src="src/images/hmbb3.jpg" alt="">
             <h1 class="title">nokia</h1>
             <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥888</span>
                </p> 
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
             </div>
        </div>
         <div class="goods-item">
             <img src="src/images/hmbb3.jpg" alt="">
             <h1 class="title">nokia</h1>
             <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥888</span>
                </p> 
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
             </div>
        </div>
         <div class="goods-item">
             <img src="src/images/hmbb3.jpg" alt="">
             <h1 class="title">nokia</h1>
             <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥888</span>
                </p> 
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
