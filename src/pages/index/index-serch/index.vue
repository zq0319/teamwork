<template>
  <div class="wrapper">
    <div class="inputtop">
      <input type="text"
             placeholder="搜索"
             v-model="value"
             @change="searchall" />
      <span>取消</span>
    </div>
    <div>
      <p><span>历史记录</span><span>X</span></p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapActions('index', ['scrollAll']),
    searchall (e) {

    }
  }
}
</script>
<style lang="scss">
page,
.wrapper {
  width: 100%;
  height: 100%;
}
.inputtop {
  width: 100%;
  height: 100rpx;
  padding: 20rpx;
  box-sizing: border-box;
  background: #eee;
  display: flex;
  align-items: center;
  > input {
    width: 80%;
    height: 100%;
    background: #ddd;
    border-radius: 10rpx;
  }
  span {
    padding-left: 45rpx;
    color: #666;
  }
}
</style>
