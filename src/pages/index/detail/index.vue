<template>
  <div class="box">
    <div class="wap-swiper"
         v-if="detailStr.supplierProductPictureVoList.length">
      <swiper autoplay="true">
        <swiper-item v-for="(item,index) in detailStr.supplierProductPictureVoList"
                     :key="index">
          <img :src="item.imgUrl"
               alt="">
        </swiper-item>
      </swiper>
    </div>
    <div class="wap-swiper"
         v-else>
      <img :src="detailStr.mainImgUrl"
           alt="">
    </div>
    <div class="tit">
      <div class="ones">
        <div class="price">￥{{detailStr.salesPrice}}</div>
        <div class="num">￥{{detailStr.vipPrice}}</div>
        <img src="/static/images/黑卡@2x.png"
             alt
             class="_img" />
      </div>
      <div class="earn">分享赚{{detailStr.memberDiscountPrice}}</div>
    </div>
    <div class="title">
      <div class="names">{{detailStr.title}}</div>
      <div class="delivery"
           v-if="isFreeShipping">快递包邮</div>
    </div>
    <div class="list">
      <div class="lis">
        <div class="left">选择</div>
        <div class="right">
          <div style="margin-left:5rpx">颜色</div>
          <div class="select">
            <span>智立方（马卡龙色）</span>
            <img src="/static/images/jt.png"
                 alt
                 class="jt" />
          </div>
        </div>
      </div>
      <div class="lis">
        <div>说明</div>
        <div class="right">
          <div>{{detailStr.description}}</div>
        </div>
      </div>
      <div class="lis">
        <div>提示</div>
        <div class="right">
          <div>{{detailAddressObj.result}}</div>
        </div>
      </div>
    </div>
    <div class="pic">
      <img mode="widthFix"
           v-for="(item,index) in detailStrImgsAll"
           :key="index"
           :src="item.imgUrl"
           alt />
    </div>
    <div class="footer">
      <button>分享赚9.94元</button>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      detailStr: state => state.index.detailStr,
      detailStrImgsAll: state => state.index.detailStrImgsAll,
      detailAddressObj: state => state.index.detailAddressObj
    })
  },
  onLoad (options) {
    console.log(this, options)
    let that = this;
    this.detail({
      pid: options.pid
    }).then(res => {
      that.detailStrImg({
        pid: res.pid,
        basePid: res.basePid,
        userIdentity: res.userIdentity
      })
      that.detailAddress({
        sstid: res.sstid
      })
    })
  },
  methods: {
    ...mapActions('index', ['detail', 'detailStrImg', 'detailAddress'])
  }
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

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    > img {
      width: 100%;
      height: 100%;
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
