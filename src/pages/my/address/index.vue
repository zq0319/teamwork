<template>
  <div class="result">
    <div @click="addPage">新增收货地址</div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.scrollAll();
  },
  methods: {
    ...mapActions("index", ["scrollAll"]),
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
.result div {
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