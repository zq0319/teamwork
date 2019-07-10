<template>
  <div class="wrap">
    <div class="wrap_header">
      <div
        class="wrap_header_box"
        @click="taborder(item,index)"
        v-for="(item,index) in order"
        :key="index"
      >
        <span :class="index == num?'spansAddColor':''">{{item.name}}</span>
      </div>
    </div>
    <div class="wrap_cont">
      <div class="wrap_cont_box" v-show="index==num" v-for="(item,index) in orderData" :key="index">
        <div class="wrap_cont_box_data">
          <div class="wrap_cont_box_data_time">2019-07-10-19:17:58</div>
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
          <div class="wrap_cont_box_data_bottom">
            <div></div>
            <div class="wrap_cont_box_data_bottom_right">共1件商品 合计：￥319</div>
          </div>
          <div class="statusBar">已取消</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [
        {
          name: "全部",
          flag: true,
          staus: 0
        },
        {
          name: "待付款",
          flag: false,
          staus: 1
        },
        {
          name: "待发货",
          flag: false,
          staus: 2
        },
        {
          name: "待收货",
          flag: false,
          staus: 3
        }
      ],
      orderData: ["", "", "", ""],
      num: 0
    };
  },
  methods: {
    taborder(item, ind) {
      this.num = ind;
      item.flag = !item.flag;
    }
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
}
.wrap_header {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  background: #fff;
}
.wrap_header_box {
  flex: 1;
  display: flex;
  justify-content: center;
}
.spansAddColor {
  padding: 30rpx 20rpx;
  border-bottom: 6rpx solid orangered;
  color: orangered;
}
.wrap_cont {
  width: 100%;
  height: auto;
}
.wrap_cont_box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
.wrap_cont_box_data {
  width: 92%;
  height: auto;
  background: #fff;
  border-radius: 8rpx;
  margin-top: 20rpx;
  position: relative;
}
.wrap_cont_box_data_time {
  margin: 20rpx 0 30rpx 20rpx;
}
.wrap_cont_box_data_div {
  width: 100%;
  height: auto;
  display: flex;
  border-bottom: 2rpx solid #ececec;
  font-size: 28rpx;
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
.wrap_cont_box_data_bottom {
  width: 100%;
  height: 200rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrap_cont_box_data_bottom_right {
  float: right;
  margin-right: 3%;
}
.statusBar {
  position: absolute;
  right: 3%;
  top: 20rpx;
}
</style>
