<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/Tabbar.vue'
  export default {
    data() {
      return {}
    },
    components: {
      Tabbar
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '~assets/less/theme.less';
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #f7f7f7;
  }
</style>
