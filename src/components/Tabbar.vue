<template>
  <tabbar id="tabbar">
    <tabbar-item :link="route.path" @on-item-click="onItemClick(route)" v-for="route in routeList">
      <img slot="icon" :src="route.icon"/>
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
        activeIndex: 0
      }
    },
    methods: {
      onItemClick(index){
        this.activeIndex = index
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
