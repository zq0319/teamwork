<template>
  <div class="result">
    <form @submit="submit" bindreset="formReset">
      <div class="top">
        <div>
          <input type="text" name="inp_people" placeholder="收货人" />
          <span>></span>
        </div>
        <div>
          <input type="text" name="inp_phone" placeholder="手机号码" />
          <span>+86</span>
        </div>
        <div>
          <picker mode="region" @change="pickerActive" name="inp_active" value="active">{{active}}</picker>
          <span>></span>
        </div>
        <div>
          <input type="text" class="inp" name="inp_prate" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等" />
        </div>
      </div>
      <div class="bottom">
        <div class="title">标签</div>
        <div class="info">
          <div
            @click="cutFlag(index)"
            v-for="(item,index) in city"
            :key="index"
            :class="i===index?'addColor':'div_city'"
          >{{item}}</div>
        </div>
        <div class="contbtn">
          <div>设为默认地址</div>
          <switch class="cont_switch" name="switch" />
        </div>
        <button form-type="submit" class="save">保存</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      city: ["家", "公司", "学校", "其它"],
      active: ["所在地区"],
      flag: false,
      div_city_flag: false,
      addressTag: 0,
      i: null,
      activeArr: []
    };
  },
  methods: {
    ...mapActions("index", ["takeAction"]),
    pickerActive(e) {
      console.log(e);
      this.active = e.target.value.join("-");
      this.activeArr = e.target.code;
    },
    cutFlag(index) {
      this.flag = !this.flag;
      this.i = index;
      console.log(index);
      this.addressTag = index + 1;
    },
    submit(e) {
      console.log(e);
      if (
        e.target.value.inp_people == "" ||
        e.target.value.inp_prate == "" ||
        e.target.value.inp_active == ""
      ) {
        wx.showToast({
          title: "正确输入有效内容，以保障您能收到宝贝",
          icon: "none"
        });
      } else {
        if (
          !/^1(3|4|5|7|8)\d{9}$/.test(e.target.value.inp_phone) ||
          !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(e.target.value.inp_phone)
        ) {
          wx.showToast({
            title: "请正确输入手机号", //提示的内容,
            icon: "none" //图标,
          });
          return false;
        } else {
          // console.log({ state: e.target.value.switch ? 1 : 0 });
          this.takeAction({
            provinceId: this.activeArr[0],
            provinceName: e.target.value.inp_active[0],
            cityId: this.activeArr[1],
            cityName: e.target.value.inp_active[1],
            areaId: this.activeArr[2],
            areaName: e.target.value.inp_active[2],
            address: e.target.value.inp_prate,
            consignee: e.target.value.inp_people,
            consigneePhone: e.target.value.inp_phone,
            addressTag: this.addressTag,
            state: e.target.value.switch ? 1 : 0
          });
        }
      }
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
.top {
  width: 100%;
  height: 230px;
  background: #fff;
}
.top div {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  font-size: 14px;
  color: #999;
  align-items: center;
  padding: 0 20px;
}
input {
  width: 85%;
}
picker {
  width: 85%;
}
.bottom {
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 10px;
}
.cont_switch {
  margin-top: -14rpx;
}
.title {
  font-size: 14px;
  padding: 10px 20px;
}
.info {
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #f6f6f6;
}
.div_city {
  font-size: 14px;
  padding: 7px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-left: 15px;
}

.addColor {
  color: orangered;
  font-size: 14px;
  padding: 7px 20px;
  border-radius: 20px;
  border: 1px solid orangered;
  margin-left: 15px;
}
.contbtn {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 18px;
}
.save {
  width: 90%;
  height: 50px;
  background: orangered;
  color: #fff;
  text-align: center;
  line-height: 50px;
  border-radius: 10px;
  margin: 50px auto;
}
.inp {
  width: 80%;
}
</style>