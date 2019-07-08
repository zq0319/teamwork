<template>
  <div class="box">
    <div class="searchFor">
      <div class="search">
        <div class="secach-bg">
          <img src="/static/images/search.png" alt class="img" />
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
            />
          </div>
        </div>
        <div class="btn">取消</div>
      </div>
    </div>
    <div class="histort">
      <div class="historys">
        <div class="title">历史搜索</div>
        <img src="/static/images/del.png" alt class="title_img" />
      </div>
      <div class="choice">
        <div class="choice_item">8555</div>
        <div class="choice_item">8555</div>
        <div class="choice_item">8555</div>
        <div class="choice_item">8555</div>
        <div class="choice_item">8555</div>
        <div class="choice_item">8555</div>
      </div>
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
}
</style>
