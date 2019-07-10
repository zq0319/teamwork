<template>
  <div class="box">
    <div class="searchFor">
      <div class="search">
        <div class="secach-bg">
          <img src="/static/images/search.png"
               alt
               class="img" />
          <div class="secach-input">
            <input
              type="text"
              placeholder="搜索"
              bindconfirm="handleProxy"
              data-comkey="0"
              data-eventid="0"
              selection-start="-1"
              selection-end="-1"
              cursor="-1"
              comkey="0"
              @confirm="confirm($event)"
              v-model="queryWord"
            />
          </div>
        </div>
        <div class="btn" @click="btn">取消</div>
      </div>
    </div>
    <div class="histort" v-if="fuzzySearch.length <= 0 || fuzzySearch==null">
      <div class="historys">
        <div class="title">历史搜索</div>
        <img src="/static/images/del.png"
             alt
             class="title_img" />
      </div>
      <div class="choice">
        <div
          class="choice_item"
          v-for="(item,index) in lists"
          :key="index"
          @click="button(item)"
        >{{item}}</div>
      </div>
    </div>
    <div class="list" v-else>
      <div class="wrap">
        <div class="nav">
          <div class="nav_title">
            <div
              v-for="(item,index) in topAlls"
              :key="index"
              @click="tabSstr(item.queryType)"
              class="nav_list"
            >{{item.name}}</div>
          </div>
        </div>
        <div class="centers">
          <div
            class="dler"
            v-for="(item,index) in fuzzySearch"
            :key="index"
            @click="searchPid(item.pid)"
          >
            <div class="dl">
              <div class="dll">
                <img :src="item.mainImgUrl" alt mode="widthFix" />
              </div>
            </div>
            <div class="dd">
              <div class="ddd">{{item.title}}</div>
              <div class="price">
                <div class="prices">￥{{item.vipPrice}}</div>
                <div class="span">{{item.vipPrice}}</div>
              </div>
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
  data () {
    return {
      queryWord: "",
      queryType: 0,
      querySort: "asc",
      pageIndex: 1,
      status: 0,
      list: [],
      lists: [],
      topAlls: [
        { name: "综合", queryType: 0 },
        { name: "最新", queryType: 1 },
        { name: "价格", queryType: 2 }
      ]
    };
  },
  computed: {
    ...mapState({
      fuzzySearch: state => state.index.fuzzySearch
    })
  },
  onReachBottom() {
    let index = this.ind;
    index++;
    this.ind = index;
    this.fuzzySearchs({
      queryWord: this.queryWord,
      queryType: this.queryType,
      querySort: this.querySort,
      pageIndex: index
    });
  },
  onLoad(options) {
    let that = this;
    wx.getStorage({
      key: "searchHistory",
      success(res) {
        that.lists = JSON.parse(res.data);
      }
    });
  },
  methods: {
    ...mapActions("index", ["fuzzySearchs"]),
    //跳详情
    searchPid(pid) {
      wx.navigateTo({ url: `/pages/index/detail/main?pid=${pid}` });
    },
    //排序
    tabSstr(queryType) {
      let that = this;
      if (queryType === 2) {
        queryType = 2;
        this.querySort = "desc";
      } else if (this.querySort === "desc") {
        queryType = 2;
        this.querySort = "asc";
      } else {
        this.queryType = queryType;
      }
      this.fuzzySearchs({
        queryWord: this.queryWord,
        queryType: queryType,
        querySort: this.querySort,
        pageIndex: this.pageIndex
      });
    },
    //模糊搜索
    confirm: function(e) {
      let that = this;
      this.queryWord = e.target.value;
      that.fuzzySearchs({
        queryWord: that.queryWord,
        queryType: that.queryType,
        querySort: that.querySort,
        pageIndex: that.pageIndex
      });
      let searchHistory = null;
      this.list.push(this.queryWord);
      wx.setStorage({
        key: "searchHistory",
        data: JSON.stringify(this.list)
      });
    },
    //点击搜索历史
    button(e) {
      let that = this;
      this.queryWord = e;
      that.fuzzySearchs({
        queryWord: that.queryWord,
        queryType: that.queryType,
        querySort: that.querySort,
        pageIndex: that.pageIndex
      });
    },
    //清空内容
    btn() {
      let that = this;
      this.queryWord = "";
      that.fuzzySearchs({
        queryWord: "",
        queryType: that.queryType,
        querySort: that.querySort,
        pageIndex: that.pageIndex
      });
    }
  }
};
</script>
<style lang="scss">
page,
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .searchFor {
    width: 100%;
    background: #f9f9f9;
    height: 80rpx;
    line-height: 80rpx;
    box-sizing: border-box;
    z-index: 666;
    .search {
      display: flex;
      font-size: 28rpx;
      height: 60rpx;
      margin-top: 10rpx;
      .secach-bg {
        width: 80%;
        background: red;
        height: 56rpx;
        box-sizing: border-box;
        display: flex;
        background: #ededed;
        overflow: hidden;
        border-radius: 10rpx;
        margin-left: 20rpx;
        padding-left: 30rpx;
        .img {
          width: 32rpx;
          height: 32rpx;
          margin: 10rpx;
        }
        .secach-input {
          width: 70%;
          line-height: 60rpx;
          border: none;
          height: 60rpx;
          background: #ededed;
          border-radius: 10rpx;
          input {
            padding: 10rpx 0 0 10rpx;
          }
        }
      }
    }
    .btn {
      width: 10%;
      height: 56rpx;
      box-sizing: border-box;
      display: flex;
      background: #ededed;
      overflow: hidden;
      border-radius: 10rpx;
      font-size: 28rpx;
      text-align: center;
      margin-left: 40rpx;
      padding-left: 10rpx;
      line-height: 56rpx;
    }
  }
  .histort {
    width: 100%;
    .historys {
      display: flex;
      justify-content: space-between;
      .title {
        width: 112rpx;
        height: 40rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #999;
        line-height: 40rpx;
        margin: 30rpx 0 30rpx 40rpx;
      }
      .title_img {
        height: 28rpx;
        width: 28rpx;
        margin: 30rpx 40rpx 0 0;
      }
    }
    .choice {
      display: flex;
      flex-wrap: wrap;
      padding-left: 40rpx;
      box-sizing: border-box;
      .choice_item {
        width: 20%;
        height: 60rpx;
        background: #f5f5f4;
        margin: 10rpx;
        text-align: center;
        line-height: 60rpx;
      }
    }
  }
  .list {
    width: 100%;
    .nav {
      width: 100%;
      z-index: 666;
      height: 80rpx;
      background: #fff;
      .nav_title {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .nav_list {
          flex: 1;
          height: 100%;
          text-align: center;
          line-height: 80rpx;
          font-size: 26rpx;
        }
      }
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
          height: 350rpx;
          padding: 60rpx 46rpx 30rpx 28rpx;
          img {
            width: 100%;
          }
        }
        .dd {
          width: 100%;
          flex: 1;
        }
        .ddd {
          font-size: 24rpx;
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
            color: #fc5d7b;
          }
          .span {
            font-size: 20rpx;
            color: #a89831;
          }
        }
      }
    }
  }
}
</style>
