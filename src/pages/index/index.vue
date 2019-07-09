<template>
  <div class="wrapper">
    <!-- 搜索 -->
    <div class="inputtop">
      <div @click="serch">搜索</div>
    </div>
    <!-- scroll -->
    <scroll-view scroll-x class="scrolltop">
      <view
        v-for="(item,ind) in topAll"
        :key="ind"
        @click="strtop(ind)"
        :class="ind === index?'address':null"
      >{{item.cname}}</view>
    </scroll-view>
    <!-- banner -->
    <div class="banner" v-if="contnetAll[0]['items']">
      <swiper
        indicator-dots="false"
        autoplay="false"
        interval="5000"
        circular="true"
        duration="1000"
        class="banner_swiper"
      >
        <swiper-item
          v-for="(item,index) in contnetAll[0]['items']"
          :key="index"
          class="banner_item"
        >
          <image :src="item.imgUrl" />
        </swiper-item>
      </swiper>
    </div>
    <!--  link图片-->
    <div v-if="contnetAll[1].items" class="linkUrl">
      <div v-for="(item,i) in contnetAll[1].items" :key="i">
        <img :src="item.imgUrl" alt />
      </div>
    </div>
    <div>
      <div class="content">
        <div class="contnet_top">
          <img :src="contnetAll[3].pictUrl" alt />
        </div>
        <div class="contnet_title">
          <div>
            <span>精选好物</span> |
            <span>等你来抢</span>
          </div>
          <div class="tops">更多</div>
        </div>
        <div class="content_con">
          <div v-for="(item,index) in contnetAll[4].items" :key="index">
            <img :src="item.imgUrl" alt />
            <p>{{item.title}}</p>
            <span>￥{{item.salesPrice}}</span>
          </div>
          <div class="content_con">
            <div
              v-for="(item,index) in contnetAll[4].items"
              :key="index"
              @click="clickDetail(item.jumpUrl)"
            >
              <img :src="item.imgUrl" alt />
              <p>{{item.title}}</p>
              <span>￥{{item.salesPrice}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="contnet_top">
            <img :src="contnetAll[5].pictUrl" alt />
          </div>
          <div class="contnet_title">
            <div>
              <span>精选好物</span> |
              <span>等你来抢</span>
            </div>
            <div class="tops">更多</div>
          </div>
          <div class="content_con">
            <div
              v-for="(item,index) in contnetAll[6].items"
              :key="index"
              @click="clickDetail(item.jumpUrl)"
            >
              <img :src="item.imgUrl" alt />
              <p>{{item.title}}</p>
              <span>￥{{item.salesPrice}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="contnet_top">
            <img :src="contnetAll[7].pictUrl" alt />
          </div>
          <div class="contnet_title">
            <div>
              <span>精选好物</span> |
              <span>等你来抢</span>
            </div>
            <div class="tops">更多</div>
          </div>
          <div class="content_con">
            <div
              v-for="(item,index) in contnetAll[8].items"
              :key="index"
              @click="clickDetail(item.jumpUrl)"
            >
              <img :src="item.imgUrl" alt />
              <p>{{item.title}}</p>
              <span>￥{{item.salesPrice}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="contnet_top">
            <img :src="contnetAll[9].pictUrl" alt />
          </div>
          <div class="contnet_title">
            <div>
              <span>精选好物</span> |
              <span>等你来抢</span>
            </div>
            <div class="tops">更多</div>
          </div>
          <div class="content_con">
            <div
              v-for="(item,index) in contnetAll[10].items"
              :key="index"
              @click="clickDetail(item.jumpUrl)"
            >
              <img :src="item.imgUrl" alt />
              <p>{{item.title}}</p>
              <span>￥{{item.salesPrice}}</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="contnet_top">
            <img :src="contnetAll[11].pictUrl" alt />
          </div>
          <div class="contnet_title">
            <div>
              <span>精选好物</span> |
              <span>等你来抢</span>
            </div>
            <div class="tops">更多</div>
          </div>
          <div class="content_con">
            <div
              v-for="(item,index) in contnetAll[12].items"
              :key="index"
              @click="clickDetail(item.jumpUrl)"
            >
              <img :src="item.imgUrl" alt />
              <p>{{item.title}}</p>
              <span>￥{{item.salesPrice}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- dwon数据 -->
      <div class="dwon_item">
        <div
          v-for="(item,index) in dwonAlls"
          class="down_items"
          @click="clickDetail(item.productVo.pid)"
          :key="index"
        >
          <div class="imgdiv">
            <img :src="item.productVo.mainImgUrl" alt />
          </div>
          <div class="item_content">
            <p>{{item.productVo.title}}</p>
            <div class="isFreeShipping">
              <span v-if="item.productVo.isFreeShipping">包邮</span>
              <span v-if="item.productVo.isFreeTax">包税</span>
            </div>
            <div class="price">
              <span>￥{{item.productVo.salesPrice}}</span>
              <div>
                ￥{{item.productVo.vipPrice}}
                <img v-if="item.productVo.vipPrice" src="/static/images/黑卡@2x.png" alt />
              </div>
              <a>赚{{item.productVo.earnMoney}}</a>
            </div>
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
      index: 0
    };
  },
  computed: {
    ...mapState({
      topAll: state => state.index.topAll,
      contnetAll: state => state.index.contnetAll,
      dwonAlls: state => state.index.dwonAlls
    })
  },
  created() {
    // console.log(this.scrollAll())
    this.scrollAll({
      parentId: 0
    });
    this.bannerimgUrl("");
    this.dwonAll({
      pageIndex: 1
    });
  },
  onReachBottom() {
    let index = 1;
    index++;
    this.dwonAll({
      pageIndex: index
    });
  },
  methods: {
    ...mapActions("index", ["scrollAll", "bannerimgUrl", "dwonAll"]),
    serch() {
      wx.navigateTo({ url: `/pages/index/indexSerch/main` });
    },
    clickDetail(e) {
      let str;
      if (typeof e !== "number") {
        str = e.split("&")[1].split("=")[1];
      } else {
        str = e;
      }

      console.log(str);
      wx.navigateTo({ url: `/pages/index/detail/main?pid=${str}` });
    },
    strtop(ind) {
      if (ind === 0) {
        return;
      } else {
        console.log(ind);
        wx.navigateTo({ url: `/pages/index/top-array/main?page=${ind}` });
      }
    }
  }
};
</script>
<style lang="scss">
.inputtop {
  width: 100%;
  height: 100rpx;
  padding: 20rpx;
  box-sizing: border-box;

  div {
    width: 100%;
    height: 100%;
    background: #eee;
    display: flex;
    align-items: center;
    color: #ccc;
    padding: 0 20rpx;
    box-sizing: border-box;
    border-radius: 10rpx;
  }
}
.scrolltop {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  white-space: nowrap;

  view {
    display: inline-block;
    height: 90%;
    margin: 0 20rpx;
  }
}
.address {
  color: #56d2bf;
  border-bottom: 3rpx solid #56d2bf;
}
.banner {
  width: 100%;
  height: 350rpx;
  padding: 10rpx;
  box-sizing: border-box;

  .banner_swiper {
    width: 100%;
    height: 100%;
    border-radius: 10rpx;

    .banner_item {
      width: 100%;
      height: 100%;

      > image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }
  }
}
.linkUrl {
  width: 100%;
  height: 350rpx;
  display: flex;
  padding: 10rpx;
  box-sizing: border-box;
  position: relative;
  div {
    height: 100%;
    width: 30%;
    margin: 3rpx;

    &:first-child {
      width: 37%;
      height: 100%;
      float: left;
    }
    &:nth-child(2) {
      width: 60%;
      height: 47%;
      position: absolute;
      top: 10rpx;
      right: 10rpx;
    }
    &:nth-child(3) {
      width: 60%;
      height: 47%;
      position: absolute;
      bottom: 5rpx;
      right: 10rpx;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  width: 100%;
  height: auto;
  padding: 10rpx;
  box-sizing: border-box;

  .contnet_top {
    width: 100%;
    height: 200rpx;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
    }
  }
  .contnet_title {
    width: 100%;
    height: 100rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 30rpx;

      &:first-child {
        font-size: 40rpx;
      }
    }
    .tops {
      color: red;
      font-size: 35rpx;
      font-weight: 800;
    }
  }
  .content_con {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 32%;
      height: 400rpx;
      margin: 0 5rpx;

      p {
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }

      span {
        color: red;
      }
    }

    img {
      width: 100%;
      height: 250rpx;
    }
  }
}
.dwon_item {
  width: 100%;
  padding: 0 10rpx;
  box-sizing: border-box;

  .down_items {
    width: 100%;
    // height: 200rpx;
    margin-top: 30rpx;
    display: flex;

    .imgdiv {
      width: 200rpx;
      height: 200rpx;
      display: flex;
      padding: 15rpx;
      justify-content: center;
      align-items: center;
    }
    .item_content {
      flex: 1;

      > p {
        width: 100%;
        line-height: 60rpx;
      }
      .isFreeShipping {
        span {
          font-size: 22rpx;
          border: 2rpx solid red;
          border-radius: 5rpx;
          color: red;
          padding: 5rpx 7rpx;
          margin: 0 10rpx;
        }
      }
      .price {
        width: 100%;
        line-height: 100rpx;
        display: flex;
        font-size: 22rpx;
        color: red;
        > span {
          font-size: 45rpx;
          margin-right: 10rpx;
        }
        div {
          display: flex;
          align-items: center;
          margin-right: 10rpx;

          img {
            width: 60rpx;
            height: 20rpx;
          }
        }
        > a {
          height: 22rpx;
          line-height: 22rpx;
          position: relative;
          top: 40rpx;
          background: #eee;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
