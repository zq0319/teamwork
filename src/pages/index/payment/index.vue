<template>
  <div class="wrap">
    <div class="wrap_head">
      <div class="wrap_head_top"></div>
      <div class="wrap_head_active">
        <div class="wrap_head_active_title">
          <span>蜗牛</span>
          <span>15660086220</span>
        </div>
        <div class="wrap_head_active_city">
          <div class="wrap_head_active_city_left">
            <icon type="info" />
            <span>北京市北京市海淀区八维</span>
          </div>
          <div class="wrap_head_active_city_right">
            <span>></span>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_cont">
      <div class="wrap_cont_box_data_div">
        <img class="wrap_cont_box_data_div_img" alt />
        <div class="wrap_cont_box_data_div_title">
          <p>4包 尤妮佳 moony 拉拉裤XL38男宝</p>
          <p class="wrap_cont_box_data_div_title_g">规格：默认</p>
          <p class="wrap_cont_box_data_div_title_m">
            <span>￥319</span>
            <span>x1</span>
          </p>
        </div>
      </div>
      <div class="wrap_cont_box_bottom">
        <div class="wrap_cont_box_bottom_way">
          <div class="wrap_cont_box_bottom_way_left">发货方式</div>
          <div class="wrap_cont_box_bottom_way_right">快递(baoyou)：0 元</div>
        </div>
        <div class="wrap_cont_box_bottom_aggr">
          <div class="wrap_cont_box_bottom_aggr_left">订单总计</div>
          <div class="wrap_cont_box_bottom_aggr_right">￥ 19</div>
        </div>
        <div class="wrap_cont_box_bottom_favor">
          <div class="wrap_cont_box_bottom_favor_left">优惠券</div>
          <div class="wrap_cont_box_bottom_favor_right">></div>
        </div>
        <div class="wrap_cont_box_bottom_wx">
          <div class="wrap_cont_box_bottom_wx_left">微信支付</div>
          <div class="wrap_cont_box_bottom_wx_right">
            <icon type="success" color="rgb(0,255,255)" />
          </div>
        </div>
      </div>
    </div>
    <div class="wrap_bot">
      <div class="wrap_bot_left">
        <div class="wrap_bot_left_l">
          总计 ￥
          <span>19</span>
        </div>
        <div class="wrap_bot_left_r">微信支付</div>
      </div>
      <button class="wrap_bot_btn">去支付</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: auto;
  position: relative;
}
.wrap_head {
  width: 100%;
  height: 190rpx;
  background: #ececec;
}
.wrap_head_top {
  width: 100%;
  height: 1rpx;
}
.wrap_head_active {
  width: 94%;
  height: 150rpx;
  margin-left: 3%;
  margin-top: 20rpx;
  background: #fff;
  border-radius: 6rpx;
}
.wrap_head_active_title {
  width: 100%;
  display: flex;
}
.wrap_head_active_title span {
  font-size: 32rpx;
  font-weight: 900;
  margin: 20rpx 20rpx 0 20rpx;
}
.wrap_head_active_city {
  width: 100%;
  height: 60rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 10rpx solid orangered;
  padding-bottom: 20rpx;
}
.wrap_head_active_city_left {
  height: 60rpx;
  display: flex;
  align-items: center;
}
icon {
  margin: 0 20rpx;
}
.wrap_head_active_city_right {
  margin-right: 20rpx;
  font-size: 36rpx;
}
.wrap_cont_box_data_div {
  width: 100%;
  height: auto;
  display: flex;
  font-size: 28rpx;
  margin-top: 20rpx;
}
.wrap_cont_box_data_div_img {
  width: 25%;
  height: 184rpx;
  background: orangered;
  margin: 0 3%;
}
.wrap_cont_box_data_div_title_g {
  font-size: 25rpx;
  color: #999da2;
  margin: 40rpx 0;
}
.wrap_cont_box_data_div_title_m {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrap_cont_box_bottom {
  width: 100%;
  height: auto;
}
.wrap_cont_box_bottom_way {
  margin-top: 10rpx;
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_aggr {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_favor {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_bottom_wx {
  width: 94%;
  height: 100rpx;
  margin-left: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_bot {
  width: 100%;
  height: 120rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 2rpx solid #333;
  display: flex;
}
.wrap_bot_left {
  width: 75%;
  height: 120rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_bot_btn {
  width: 25%;
  height: 120rpx;
  border: 0;
  background: orangered;
  font-size: 36rpx;
  border-radius: 0;
  line-height: 120rpx;
}
.wrap_bot_left_l {
  color: orangered;
  margin-left: 3%;
}
.wrap_bot_left_l span {
  font-size: 48rpx;
}
.wrap_bot_left_r {
  margin-right: 3%;
}
</style>
