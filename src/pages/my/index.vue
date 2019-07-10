<template>
  <div>
    <img src="../../../static/images/logBg.png" class="img" alt="">
     <div class="order">
         <h3 @click="Myorder">我的订单</h3>
         <div class="dl">
            <div @click="Payment">
                <img src="../../../static/images/dfk.png" alt="">
                <span>待付款</span>
            </div>
            <div @click="Shipments">
                <img src="../../../static/images/dfh.png" alt="">
                <span>待发货</span>
            </div>
            <div @click="Receiving">
                <img src="../../../static/images/dsh.png" alt="">
                <span>待收货</span>
            </div>
         </div>
    </div>
    <div class="list">
        <div @click="Coupon">
           <img src="../../../static/images/yhj.png" alt="">
            <span>我的优惠券</span>
           <span class="back">></span>
        </div>
        <div @click="Address">
           <img src="../../../static/images/dz.png" alt="">
           <span>收货地址</span>
           <span class="back">></span>
        </div>
        <div @click="Cutomer">
           <img src="../../../static/images/yhj.png" alt="">
           <span>联系客服</span>
           <span class="back">></span>
        </div>
        <div>
           <img src="../../../static/images/sm.png" alt="">
           <span @click="Realname">实名认证</span>
           <span class="back">></span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
       
  },
  methods: {
    Coupon(){//点击我的优惠券
      var url = "./coupon/main"
       wx.navigateTo({url})
    },
    Address(){//点击收货地址
      var url="./address/main"
       wx.navigateTo({url})
    },
    Cutomer(){//联系客服
      var url="./cutomer/main"
       wx.navigateTo({url})
    },
    Realname(){//点击实名认证
      var url="./realname/main"
       wx.navigateTo({url})
    },
    Payment(){//点击待付款
      var url="./payment/main"
       wx.navigateTo({url})
    },
    Shipments(){//点击待发货
       var url="./shipments/main"
       wx.navigateTo({url})
    },
    Receiving(){//点击待收货
       var url="./receiving/main"
       wx.navigateTo({url})
    },
    Myorder(){//点击我的订单
       var url="./myorder/main"
       wx.navigateTo({url})
    }
  }
}                                               
</script>
<style>
page{
  width:100%;
  height:100%;
  background:#f3f7f7;
}
.img{
  width:100%;
  height:110px;
}
.order{
  width:96%;
  height:115px;
  background:#fff;
  border-radius:6px;
  position:absolute;
  top:90px;
  left:2%;
}
.order h3{
  margin:6px;
}
.dl{
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.dl img{
  width:40px;
  height:45px;
}
.dl div{
  display:flex;
  flex-direction:column;
  font-size:14px;
  color:#666;
}
.list{
  width:96%;
  height:180px;
  background:#fff;
  position:absolute;
  top:215px;
  left:2%;
}
.list div{
  width:100%;
  height:25%;
  display:flex;
  align-items:center;
  font-size:14px;
  color:#333;
  position:relative;
}
.list img{
  width:17px;
  height:17px;
  margin:0 18px;
}
.back{
  position:absolute;
  right:15px;
  color:#666;
}
</style>
