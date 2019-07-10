<template>
  <div class="result">
    <div class="active">
      <div class="active_part" v-for="(item,ind) in activeDataArr[0]" :key="ind">
        <p>姓名：{{item.consignee}}</p>
        <p>手机号：{{item.consigneePhone}}</p>
        <p>地址：{{item.provinceName}}-{{item.cityName}}-{{item.areaName}}</p>
        <p>详细地址：{{item.address}}</p>
      </div>
    </div>
    <div class="gotopage" @click="addPage">新增收货地址</div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeDataArr: []
    };
  },
  computed: {
    ...mapState({
      activeData: state => state.index.activeData
    })
  },
  onShow() {
    this.activeDataArr.push(this.activeData);
    console.log(this.activeDataArr[0].address, "111111111111111111111111111");
  },
  methods: {
    addPage() {
      var url = "./addpage/main";
      wx.navigateTo({ url });
    }
  }
};
</script>
<style scoped>
page {
  width: 100%;
  height: 100%;
  background: #eee;
}
.result .gotopage {
  width: 96%;
  height: 100rpx;
  background: #33d6c5;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 14rpx;
  font-size: 36rpx;
  margin-top: 120rpx;
  margin-left: 2%;
}
</style>