<template>
  <div class="result">
    <div class="nav">
      <div :class="{'selected':tab === 1}"
           @click="changTab(1)">未使用</div>
      <div :class="{'selected':tab === 2}"
           @click="changTab(2)">已使用</div>
      <div :class="{'selected':tab === 3}"
           @click="changTab(3)">已过期</div>
    </div>
    <div class="container">
      <div v-if="tab===1">
        <img src="../../../../static/images/暂无.png"
             alt="">
        <span>暂时没有可用的优惠券哦~</span>
      </div>
      <div v-else-if="tab===2">中级</div>
      <div v-else>高级</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      tab: 1
    }
  },
  created () {
  },
  methods: {
     changTab(index) {
        this.tab = index;
      }
  }
}
</script>
<style lang='scss'>
.result {
  width: 710rpx;
  .nav {
    width: 100%;
    height: 40px;
    color: #333;
    background: #fff;
    display: flex;
    justify-content: space-around;
    font-size: 16px;
    line-height: 40px;
    .selected {
      border-bottom: 4rpx solid #33d6c5;
      height: 100%;
    }
  }
}
page {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
}
.container img {
  width: 120px;
  height: 110px;
  position: absolute;
  top: 240px;
  left: 35%;
}
.container span {
  position: absolute;
  top: 375px;
  left: 30%;
  font-size: 16px;
  color: #999;
}
</style>