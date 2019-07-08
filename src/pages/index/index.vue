<template>
  <div>首页</div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {},
  created() {
    this.topAll();
  },
  methods: {
    ...mapActions("index", ["topAll"])
  }
};
</script>
<style>
  
</style>