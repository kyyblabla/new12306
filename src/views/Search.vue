<template>
  <div>
    <x-header :left-options="{showBack:false}">
      首页
    </x-header>
    <div>search</div>
  </div>
</template>
<style>

</style>
<script>
  import {
    XHeader
  } from 'vux'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {
      XHeader
    }
  }
</script>
