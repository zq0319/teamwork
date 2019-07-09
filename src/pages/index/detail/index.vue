<template>
  <div class="box">
    <div class="wap-swiper">
      <swiper>
        <swiper-item>1</swiper-item>
        <swiper-item>2</swiper-item>
        <swiper-item>3</swiper-item>
        <swiper-item>4</swiper-item>
      </swiper>
    </div>
    <div class="tit">
      <div class="ones">
        <div class="price">￥8520</div>
        <div class="num">8520</div>
        <img src="/static/images/黑卡@2x.png" alt class="_img" />
      </div>
      <div class="earn">分享赚100万</div>
    </div>
    <div class="title">
      <div class="names">蓓臣/Babytry 婴儿背带腰凳四季通用多功能新生儿宝宝前抱式横抱式背带</div>
      <div class="delivery">快递包邮</div>
    </div>
    <div class="list">
      <div class="lis">
        <div class="left">选择</div>
        <div class="right">
          <div style="margin-left:5rpx">颜色</div>
          <div class="select">
            <span>智立方（马卡龙色）</span>
            <img src="/static/images/jt.png" alt class="jt" />
          </div>
        </div>
      </div>
      <div class="lis">
        <div>说明</div>
        <div class="right">
          <div>大家都在发</div>
        </div>
      </div>
      <div class="lis">
        <div>提示</div>
        <div class="right">
          <div>西藏自治区,新疆维吾尔自治区不发货</div>
        </div>
      </div>
    </div>
    <div class="pic">
      <img mode="widthFix" src="https://h5.jinaup.com/product_img/1.jpg" alt />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/52b970c2b9ed6a35349323a9c10cc47a.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/0fb81ea770369751becac47f241ab6a2.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/590b9adc0073929ff1781cf4eae0b881.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/3b94ef9ce77e21cae98779fdde35f22e.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/3f5bd1cb994044a16aa893118ad03823.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/08bb87c44b0340c9eae14eb7cef6295a.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/91ef03c2b8dbef5ba4da834eef561d41.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/f3fc35e6be74e66bf7beb3a95e7685fc.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/be98d99ab911b338c6f255f2367769ae.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/432555a82e8445b26654693c3010e6ed.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/8aa088795529a86e5dfd65319cc6b95a.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/a7a4a409f42bc2fbbf44888e8dd72c4a.jpg"
        alt
      />
      <img
        mode="widthFix"
        src="https://jnup.oss-cn-beijing.aliyuncs.com/product/ad775411abd934afbf58784f2e0fc4b5.jpg"
        alt
      />
      <img mode="widthFix" src="https://h5.jinaup.com/product_img/2.jpg" alt />
    </div>
    <div class="footer">
      <button>分享赚9.94元</button>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {}
};
</script>
<style lang="scss">
page,
.box {
  width: 100%;
  .wap-swiper {
    width: 100%;
    height: 100vw;
    position: relative;
    swiper {
      width: 100vw;
      height: 100vw;
      swiper-item {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: translate(0%, 0px) translateZ(0px);
        background: #f5f5f5;
      }
    }
  }
  .tit {
    display: flex;
    justify-content: space-between;
    height: 64rpx;
    color: #fc5d7b;
    .ones {
      padding-left: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .price {
        font-size: 44rpx;
        margin-right: 20rpx;
      }
      .num {
        height: 64rpx;
        line-height: 64rpx;
        font-size: 30rpx;
        color: #a97a33;
      }
      ._img {
        width: 40rpx;
        height: 20rpx;
        margin-top: 26rpx;
        margin-left: 10rpx;
      }
    }
    .earn {
      font-size: 24rpx;
      border: 2rpx solid #fc5d7b;
      padding: 6rpx 20rpx;
      height: 40rpx;
      line-height: 40rpx;
      border-top-left-radius: 20rpx;
      border-bottom-left-radius: 20rpx;
    }
  }
  .title {
    width: 100%;
    padding: 20rpx;
    box-sizing: border-box;
    .names {
      font-size: 36rpx;
      color: #323a45;
    }
    .delivery {
      display: flex;
      justify-content: space-between;
      line-height: 3;
      font-size: 24rpx;
      color: #999da2;
    }
  }
  .list {
    width: 100%;
    padding: 0 2rpx;
    box-sizing: border-box;
    .lis {
      display: flex;
      font-size: 26rpx;
      height: 80rpx;
      line-height: 80rpx;
      .left {
        color: #676767;
      }
      .right {
        flex: 1;
        color: #323a45;
        display: flex;
        padding: 0 10rpx;
        box-sizing: border-box;
        justify-content: space-between;
        .jt {
          width: 20rpx;
          height: 20rpx;
        }
      }
    }
  }
  .pic {
    width: 100%;
    margin-bottom: 100rpx;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    border-top: 2rpx solid #ccc;
    text-align: center;
    display: flex;
    button {
      width: 50%;
      height: 100%;
      color: #fff;
      background: linear-gradient(217deg, #f86367, #fb2579);
      border-radius: 0;
    }
  }
}
</style>
