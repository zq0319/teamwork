<template>
  <div class="box">
    <div class="wap-swiper"
         v-if="detailStr.supplierProductPictureVoList.length">
      <swiper autoplay="true"
              indicator-dots="true">
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
      <div class="lis"
           @click="detailStor">
        <div class="left">选择</div>
        <div class="right">
          <div style="margin-left:5rpx"><span v-for="(item,index) in specification"
                  :key="index">{{item.aname}}</span></div>
          <div class="select">
            <span v-for="(item,index) in topAll"
                  :key="index">{{item}}</span>
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
      <button @click="lisjgo">立即购买</button>
    </div>
    <div class="fixed_tops"
         v-show="flag">
      <div class="bottom_breed">
        <div class="allStar">
          <div style="margin-left:5rpx"
               class="breed_tops">
            <div><span v-for="(item,index) in specification"
                    :key="index">{{item.aname}}</span></div>
            <p @click="xitems">X</p>
          </div>
          <div class="breed_imgs">
            <div class="imgs_i"><img :src="detailStr.mainImgUrl"
                   alt=""></div>
            <div class="sping_i">
              <p>￥{{detailStr.salesPrice}}</p>
              <div>库存{{detailStr.totalStock}}</div>
            </div>
          </div>
          <div v-if="specification"
               class="attribute_items">
            <p>{{specification[0].aname}}</p>
            <div><span v-for="(el,i) in specification[0].attributeValueRelationVoList"
                    :key="i"
                    @click="oneslide(i,el)"
                    :class="i===index?'addressColor':null">{{el.vname}}</span></div>
          </div>
          <div v-if="specification.length>=1 && specification[1]"
               class="attribute_items">
            <p>{{specification[1].aname}}</p>
            <div><span v-for="(el,i) in specification[1].attributeValueRelationVoList"
                    :key="i"
                    @click="tweslide(i,el)"
                    :class="i===ind?'addressColor':null">{{el.vname}}</span></div>
          </div>
          <div v-if="specification.length>=2 && specification[2]"
               class="attribute_items">
            <p>{{specification[2].aname}}</p>
            <div><span v-for="(el,i) in specification[2].attributeValueRelationVoList"
                    :key="i"
                    @click="threeslide(i,el)"
                    :class="i===dthreeIn?'addressColor':null">{{el.vname}}</span></div>
          </div>
          <div class="bottomClick">
            <p>数量</p>
            <div>
              <div @click="addcur(1)">-</div>
              <div>{{price}}</div>
              <div @click="addcur(2)">+</div>
            </div>
          </div>
        </div>
        <button @click="maiToshohppings">购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      breed: '',
      flag: false,
      goumai: false,
      index: 0,
      ind: 0,
      dthreeIn: 0,
      price: 1,
      topsArr: [],
      topAll: []
    }
  },
  computed: {
    ...mapState({
      detailStr: state => state.index.detailStr,
      detailStrImgsAll: state => state.index.detailStrImgsAll,
      detailAddressObj: state => state.index.detailAddressObj,
      specification: state => state.index.specification,
      selectAll: state => state.index.selectAll,
    })
  },
  onLoad (options) {
    wx.setNavigationBarTitle({ title: '商品详情' });
    let that = this;
    this.speciFication({
      pid: options.pid
    })
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
    ...mapActions('index', ['detail', 'detailStrImg', 'detailAddress', 'speciFication', 'selectActionFn', 'orderActionFn']),
    //点击数据
    detailStor () {
      this.flag = true
    },
    //点击X
    xitems () {
      this.flag = false
    },
    //点击立即购买
    lisjgo () {
      let arr = [];
      this.specification.forEach(el => {
        arr.push(el.attributeValueRelationVoList[0].vid)
      })
      this.topsArr = arr
      if (this.goumai) {
        this.topAll = [];
        this.goumai = false
        let arr = [];
        arr.push({
          pid: this.detailStr.pid,
          buyNum: this.price,
          skuKey: this.selectAll.skuKey
        })
        this.orderActionFn({
          orderChannel: 4,
          skuPidNums: JSON.stringify(arr)
        })
        wx.navigateTo({ url: `/pages/index/top-array/main` });
      } else {
        this.flag = true
        this.selectActionFn({
          pid: this.detailStr.pid,
          vids: JSON.stringify(this.topsArr)
        })
      }
    },
    //选择第一个选项
    oneslide (index, item) {
      this.index = index
      this.topsArr[0] = item.vid
      this.selectActionFn({
        pid: item.pid,
        vids: JSON.stringify(this.topsArr)
      })
    },
    //选择第二个选项
    tweslide (index, item) {
      this.ind = index
      this.topsArr[1] = item.vid
      this.selectActionFn({
        pid: item.pid,
        vids: JSON.stringify(this.topsArr)
      })
    },
    //选择第三个选项
    threeslide (index, item) {
      this.dthreeIn = index
      this.topsArr[2] = item.vid
      this.selectActionFn({
        pid: item.pid,
        vids: JSON.stringify(this.topsArr)
      })
    },
    //点击购买
    maiToshohppings () {
      let str = []
      this.specification.forEach(el => {
        str.push(el.attributeValueRelationVoList[0].vname)
      })
      this.topAll = str
      this.flag = false
      this.goumai = true
    },
    //加减操作
    addcur (num) {
      if (num === 1) {
        if (this.price <= 1) {
          return
        } else {
          this.price--;
        }
      } else {
        this.price++;
      }
    }
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
.bottom_breed {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;

  .allStar {
    padding: 10rpx;
    box-sizing: border-box;
  }
}
.breed_tops {
  width: 100%;
  height: 40rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fixed_tops {
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
.breed_imgs {
  display: flex;
  width: 100%;
  height: 200rpx;

  > .imgs_i {
    width: 200rpx;
    height: 200rpx;
    margin-left: 20rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > .sping_i {
    line-height: 60rpx;

    > div {
      color: #ccc;
    }
  }
}
.attribute_items {
  width: 100%;
  p {
    height: 70rpx;
    line-height: 70rpx;
  }
  div {
    padding: 20rpx 0;
    span {
      margin: 0 20rpx;
      padding: 7rpx 20rpx;
      border: 1px solid #999;
      font-size: 24rpx;
      border-radius: 20rpx;
    }
  }
}
.addressColor {
  background: #999;
  color: #fff;
}
.bottomClick {
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #ccc;
    height: 60rpx;
    line-height: 60rpx;
  }
  > div {
    width: 200rpx;
    height: 60rpx;
    display: flex;
    align-items: center;
    > div {
      flex: 1;
      border: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>
