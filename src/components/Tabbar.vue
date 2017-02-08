<template>
  <tabbar id="tabbar">
    <tabbar-item :link="route.path" @on-item-click="menuChange(route.name)" v-for="route in routeList">
      <img v-if="currentMenu!=route.name" slot="icon" :src="route.icon"/>
      <img v-if="currentMenu==route.name" slot="icon" :src="route.iconActive"/>
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
