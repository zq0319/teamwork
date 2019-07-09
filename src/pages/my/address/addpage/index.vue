<template>
  <div class="wrap">
    <form @submit="formSubmit" bindreset="formReset">
      <div class="inp_people">
        <input type="text" name="name" placeholder="收货人" />
        <span>></span>
      </div>
      <div class="inp_phone">
        <input type="text" name="phone" placeholder="手机号码" />
        <span>+86</span>
      </div>
      <picker mode="region" class="box_picker">
        <div class="picker_action">所在地区</div>
      </picker>
      <div class="inp_box">
        <input type="text" class="inp_action" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等" />
      </div>
      <div class="title">标签</div>
      <div class="ceamet">
        <div class="ceamet_box" v-for="(item,ind) in label" :key="ind">{{item}}</div>
      </div>
      <div class="default">
        <div class="default_title">设为默认地址</div>
        <switch bindchange="switch2Change" />
      </div>
      <button form-type="submit" class="sure">保存</button>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      label: ["家", "公司", "学校", "其他"]
    };
  },
  created() {
    this.scrollAll();
  },
  methods: {
    ...mapActions("index", ["scrollAll"]),
    formSubmit() {
      console.log(1);
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

.inp_people {
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #ececec;
}
.inp_people input {
  width: 86%;
  height: auto;
  margin-left: 6%;
}
.inp_phone {
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
  border-bottom: 2rpx solid #ececec;
}
.inp_phone input {
  width: 81%;
  height: auto;
  margin-left: 6%;
}
.box_picker {
  width: 100%;
  height: 120rpx;
  border-bottom: 2rpx solid #ececec;
}
.picker_action {
  width: 86%;
  height: 120rpx;
  margin-left: 6%;
  line-height: 120rpx;
  color: #9ca0a5;
}
.inp_box {
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
  border-bottom: 20rpx solid #f0f0f0;
}
.inp_action {
  width: 85%;
  margin-left: 6%;
}
.title {
  width: 100%;
  height: 120rpx;
  text-indent: 0.4rem;
  line-height: 120rpx;
  border-bottom: 2rpx solid #ececec;
}
.ceamet {
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
}
.ceamet_box {
  padding: 12rpx 28rpx;
  border: 2rpx solid #ccc;
  border-radius: 40rpx;
  margin-left: 30rpx;
}
.default {
  width: 100%;
  height: 120rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.default_title {
  margin-left: 6%;
}
.default switch {
  margin-right: 6%;
}
.sure {
  width: 80%;
  height: 90rpx;
  margin-left: 10%;
  border-radius: 12rpx;
  background: orangered;
  margin-top: 120rpx;
  color: #f0f0f0;
}
</style>