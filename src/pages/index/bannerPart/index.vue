<template>
  <div class="wrap">
    <div class="wrap_box">
      <div class="ban_top">
        <img :src="goToBanPartData.specialImg"
             class="ban_img"
             alt />
        <p>{{goToBanPartData.specialName}}</p>
      </div>
      <div class="wrap_content">
        <div class="wrap_content_title">—— ◆ {{goToBanPartData.anchors[0].anchorDesc}} ◆ ——</div>
        <div class="wrap_content_shop"
             v-for="(items,index) in goToBanPartData.anchors[0].products"
             :key="index">
          <div class="wrap_content_shop_left">
            <img :src="items.mainImgUrl"
                 class="wrap_content_shop_left_img"
                 alt />
          </div>
          <div class="wrap_content_shop_right">
            <p class="wrap_content_shop_right_title">{{items.title}}</p>
            <p class="wrap_content_shop_right_many">
              <span class="wrap_content_shop_right_many_j">￥{{items.salesPrice}}</span>
              <span class="wrap_content_shop_right_many_z">赚￥{{items.memberDiscountPrice}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      con: 0,
      num: 1
    };
  },
  computed: {
    ...mapState({
      goToBanPartData: state => state.index.bannerDatas
    })
  }
};
</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}
.wrap_box {
  width: 100%;
  height: auto;
}
.ban_top {
  width: 100%;
  height: 910rpx;
  margin-bottom: 15rpx;
}
.ban_img {
  width: 100%;
  height: 795rpx;
  background: orangered;
}
.ban_top p {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  font-size: 36rpx;
  color: orangered;
  border-bottom: 2rpx solid #ececec;
  text-indent: 0.25rem;
}
.wrap_content {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrap_content_title {
  width: 100%;
  height: 150rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
}
.wrap_content_shop {
  width: 100%;
  height: 282rpx;
  display: flex;
  /* align-items: center; */
  border-bottom: 20rpx solid #f6f6f6;
}
.wrap_content_shop_left {
  width: 240rpx;
  height: 240rpx;
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrap_content_shop_left_img {
  width: 100%;
  height: 100%;
  background: orangered;
}

.wrap_content_shop_right {
  flex: 1;
  margin-left: 20rpx;
}
.wrap_content_shop_right_title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 40rpx;
  margin-top: 10rpx;
  margin-bottom: 100rpx;
}
.wrap_content_shop_right_many {
  color: #fc5d7b;
}
.wrap_content_shop_right_many_j {
  font-size: 40rpx;
  margin-right: 30rpx;
}
.wrap_content_shop_right_many_z {
  background: #ffe8ed;
  font-size: 24rpx;
}
</style>
