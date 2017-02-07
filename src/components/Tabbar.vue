<template>
  <tabbar id="tabbar">
    <tabbar-item :link="route.path" v-for="route in routeList">
      <icon slot="icon" :type="route.icon"></icon>
      <span slot="label">{{route.name}}</span>
    </tabbar-item>
  </tabbar>
</template>
<style>
  #tabbar {
    background-color: #fff;
  }
</style>
<script>
  import {
    Icon,
    Tabbar,
    TabbarItem
  } from 'vux'
  import {
    routes
  } from 'src/routers'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    computed: {
      routeList: () => routes.filter(r => r.showMenu)
    },
    components: {
      Icon,
      Tabbar,
      TabbarItem
    }
  }
</script>
