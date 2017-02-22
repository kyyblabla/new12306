<template>
  <div>
    <x-header :left-options="{showBack:false}" :right-options="{showMore: true}" @on-click-more="showMore">
      {{today}}
    </x-header>
    <calendar></calendar>
  </div>
</template>
<style>

</style>
<script>
  import {
    XHeader
  } from 'vux'
  import moment from 'moment'
  import Calendar from 'components/calendar'
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      showMore: () => {
      }
    },
    computed: {
      today: () => moment().format('YYYY年MM月')
    },
    components: {
      XHeader,
      Calendar
    }
  }
</script>
