<template>
  <div class="calendar">
    <inline-calendar
      hide-header="true"
      :weeks-list="['周日', '周一', '周二', '周三', '周四', '周五', '周六']">
    </inline-calendar>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  .calendar {
    .inline-calendar {
    }
  }
</style>
<script>
  import {
    InlineCalendar
  } from 'vux'
  export default{
    data(){
      return {}
    },
    methods: {},
    computed: {},
    components: {
      InlineCalendar
    }
  }
</script>
