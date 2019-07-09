<template>
  <div class="result"> 
       <div>客服服务电话：周一至周日（24小时）</div>
        <div>客服电话：4008 0000 53</div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
     return{
     }
  },
  methods: {
    ...mapActions('index', ['scrollAll']),
  }
}
</script>
<style>
.result div{
    font-size:18px;
    padding:18px 10px;
}
</style>