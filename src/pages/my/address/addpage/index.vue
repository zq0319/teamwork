<template>
  <div class="result">
    <div class="top">
      <div>
        <input type="text"
               placeholder="收货人">
        <span>></span>
      </div>
      <div>
        <input type="text"
               placeholder="手机号码">
        <span>+86></span>
      </div>
      <div>
        <input type="text"
               placeholder="所在地区">
        <span>></span>
      </div>
      <div>
        <input type="text"
               class="inp"
               placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元 室等">
      </div>
    </div>
    <div class="bottom">
      <div class="title">标签</div>
      <div class="info">
        <div>家</div>
        <div>公司</div>
        <div>学校</div>
        <div>其它</div>
      </div>
      <div class="contbtn">
        <div>设为默认地址</div>
        <div>33</div>
      </div>
      <div class="save">保存</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
<style>
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
.result div span {
  position: absolute;
  right: 15px;
}
.bottom {
  width: 100%;
  height: 150px;
  background: #fff;
  margin-top: 10px;
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
.info div {
  font-size: 14px;
  padding: 7px 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
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
  background: #33d6c5;
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