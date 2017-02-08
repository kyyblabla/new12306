<template>
  <tabbar id="tabbar">
    <tabbar-item  :link="route.path" @on-item-click="menuChange(route.name)" v-for="(route,index) in routeList">
      <img slot="icon" :src="currentMenu==route.name?route.iconActive:route.icon"/>
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
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    data(){
      return {
        activeIndex: 0
      }
    },
    methods: {
      ...mapActions(['menuChange'])
    },
    computed: {
      routeList: () => routes.filter(r => r.showMenu),
      ...mapGetters([
        'currentMenu'
      ])
    },
    components: {
      Icon,
      Tabbar,
      TabbarItem
    }
  }
</script>
