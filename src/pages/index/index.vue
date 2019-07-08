<template>
  <div>
    首页
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {

  },
  created () {
    this.scrollAll()
  },
  methods: {
    ...mapActions('index', ['scrollAll'])
  }
}
</script>
<style lang="sass" scoped>

</style>
