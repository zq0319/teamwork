<template>
  <div class="wrapper">
    <scroll-view scroll-x
                 class="scrolltop">
      <view v-for="(item,ind) in topAll"
            :key="ind"
            @click="strtop(ind,item)"
            :class="ind === index?'address':null">{{item.cname}}</view>
    </scroll-view>
    <div v-if="scrollChildsAlls.length"
         class="scroll_item">
      <div v-for="(item,index) in scrollChildsAlls[index-1]['childs']"
           :key="index">
        <div @click="strtop(null,item)">
          <img :src="item.imgUrl"
               alt="">
          <p>{{item.cname}}</p>
        </div>
      </div>
    </div>
    <div class="tabsArr">
      <div v-for="(item,index) in topAlls"
           :key="index"
           @click="tabSstr(item.ispageStatus)">
        {{item.name}}
      </div>
    </div>
    <div class="centers">
      <div class="dler"
           v-for="(item,index) in tabsArrayFnTop"
           :key="index"
           @click="detailStr(item.pid)">
        <div class="dl">
          <div class="dll">
            <img :src="item.mainImgUrl"
                 alt />
          </div>
        </div>
        <div class="dd">
          <div class="ddd">{{item.title}}</div>
          <div class="isFreeShipping"><span v-if="item.isFreeTax">包税</span></div>
          <div class="price">
            <div class="prices">￥{{item.vipPrice}}</div>
            <div class="span">￥{{item.vipPrice}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      index: '',
      topAlls: [{ name: '综合', ispageStatus: 1 }, { name: '最新', ispageStatus: 2 }, { name: '价格', ispageStatus: 3 }],
      str: 1,
      ind: 1
    }
  },
  computed: {
    ...mapState({
      topAll: state => state.index.topAll,
      scrollChildsAlls: state => state.index.scrollChildsAlls,
      tabsArrayFnTop: state => state.index.tabsArrayFnTop,
    })
  },
  onLoad (options) {
    this.index = options.page * 1
    this.scrollChildsAll()
    // console.log(this.topAll)
    this.tabsArray({
      pageIndex: 1,
      cid: this.topAll[options.page * 1].cid,
      sortType: 1,
    })
  },
  methods: {
    ...mapActions('index', ['scrollChildsAll', 'tabsArray']),
    strtop (ind, item) {
      if (ind === 0) {
        wx.navigateBack({
          delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
      } else {
        if (ind) {
          this.index = ind
        }
      }
      this.tabsArray({
        pageIndex: 1,
        cid: item.cid,
        sortType: this.str,
      })
    },
    tabSstr (ispageStatus) {
      if (ispageStatus === 3) {
        this.topAlls[2].ispageStatus = 4;
      } else if (ispageStatus === 4) {
        this.topAlls[2].ispageStatus = 3;
      }
      this.tabsArray({
        pageIndex: 1,
        cid: this.topAll[this.index * 1].cid,
        sortType: ispageStatus,
      })
      this.str = ispageStatus
    },
    detailStr (e) {
      wx.navigateTo({ url: `/pages/index/detail/main?pid=${e}`});
    }
  },
  onReachBottom () {
    let index = this.ind
    index++
    this.ind = index
    this.tabsArray({
      pageIndex: index,
      cid: this.topAll[this.index * 1].cid,
      sortType: this.str,
    })
  }
}
</script>

<style lang="scss">
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
.scroll_item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10rpx;
    box-sizing: border-box;
    font-size: 25rpx;
    img {
      width: 80%;
      height: 150rpx;
    }
  }
}
.tabsArr {
  width: 100%;
  height: 100rpx;
  margin: 0 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.centers {
  flex: 1;
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  padding: 18rpx 10rpx 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .dler {
    width: 363rpx;
    height: 526rpx;
    background: #fff;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    margin-top: 8rpx;
    .dl {
      height: 400rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .dll {
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .dd {
      width: 100%;
      flex: 1;

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
    }
    .ddd {
      padding-left: 10rpx;
      color: #323a45;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      width: 100%;
      display: flex;
      align-items: flex-end;
      .prices {
        display: flex;
        align-items: flex-end;
        padding-left: 6rpx;
        margin-right: 10rpx;
        color: #fc5d7b;
      }
      .span {
        font-size: 22rpx;
        color: #a89831;
      }
    }
  }
}
</style>
