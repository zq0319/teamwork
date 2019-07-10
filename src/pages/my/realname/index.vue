<template>
  <div class="result">
    <div class="top">
      <div>
        <span>真实姓名</span>
        <input type="text" v-model="val" />
      </div>
      <div>
        <span>身份证号</span>
        <input type="text" v-model="val1" />
      </div>
    </div>
    <div class="center">
      <div class="font">
        <div>上传身份证照片</div>
        <span>（图片png、jpg 大小不超过5M）</span>
      </div>
      <div class="files">
        <div @click="inpChange">
          <img :src="src" />
        </div>
        <div @click="inpChanges">
          <img :src="src1" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="tit">为什么需要实名认证？</div>
      <div
        class="cont"
      >·根据海关规定，购买跨境商品需要办理清还手续，请您配合进行是户名人在，以确保您购买分的商品顺利通过海关检查。（积纳优品还够陈诺锁传身份证明只用于办理跨境上平的清关手续，不做獭兔使用，其他任何人君无法查看）</div>
      <div
        class="cont"
      >·实名认证的规则：购买跨境是航拍需填写积纳账号注册人的真实姓名，身份证号码以及与实名一致的手机号，部分商品下单时需提供收货人的实名信息（含身份张照片），具体请以下单时的提示为准。</div>
    </div>
    <div class="save" @click="saveClick">保存</div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      src: "",
      src1: "",
      val: "",
      val1: ""
    };
  },
  created() {},
  methods: {
    ...mapActions("index", ["savearr"]),
    inpChange(e) {
      wx.chooseImage({
        success: res => {
          console.log(res.tempFilePaths[0]);
          this.src = res.tempFilePaths[0];
        }
      });
    },
    inpChanges(e) {
      wx.chooseImage({
        success: res => {
          console.log(res.tempFilePaths[0]);
          this.src1 = res.tempFilePaths[0];
        }
      });
    },
    saveClick(e) {
      //点击保存
      let str = "";
      this.savearr({
        trueName: this.val,
        idNumber: this.val1
      }).then(res => {
        str = res;
      });
      if (str.res_code === 1) {
        wx.showToast({
          title: "成功",
          icon: "none",
          duration: 2000
        });
      }
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>
<style>
page {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
}
.top {
  width: 100%;
  height: 100px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
}
._span {
  margin: 15px;
}
.top input {
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  padding: 0 10px;
}
.center {
  width: 100%;
  height: 140px;
  background: #fff;
  margin-top: 10px;
  font-size: 16px;
  padding: 15px;
}
.font {
  display: flex;
}
.font span {
  color: #999;
  margin-top: -2px;
}
.tit {
  font-size: 16px;
  padding: 15px 110px;
}
.cont {
  font-size: 14px;
  color: #999;
  padding: 0 30px;
  line-height: 20px;
  margin-bottom: 10px;
}
.save {
  width: 90%;
  height: 40px;
  color: #fff;
  background: #33d6c5;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 5%;
  text-align: center;
  line-height: 40px;
}
.files div {
  width: 155px;
  height: 100px;
  border: 1px dashed #ccc;
  text-align: center;
  line-height: 100px;
  margin-left: 10px;
  font-size: 30px;
  color: #ccc;
}
.files {
  display: flex;
}
.files img {
  width: 155px;
  height: 100px;
}
.top div {
  display: flex;
}
</style>