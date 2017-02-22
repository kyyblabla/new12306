<template>
  <div class="calendar">
    <!--头部 begin-->
    <!--头部 end-->
    <!--日期 begin-->
    <v-touch v-on:pan="onPan" v-on:panend="onPanEnd">
      <div class="box1">
        <div :style="{transform:transform}" class="box1-item">
          <table>
            <tr v-for="(week,i) in days">
              <td :class="{today:day.isToday,current:day.isCurrent}" @click="selectDay(i,j)" v-for="(day,j) in week">
                <span>{{day.day}}</span>
              </td>
            </tr>
          </table>
          <div>
            {{currentValue}}
          </div>
        </div>
      </div>
    </v-touch>
    <!--日期 end-->
  </div>
</template>
<script>
  import {Scroller} from 'vux'
  import {zero, format, getDays} from './util'
  export default{
    props: ['value', 'startDate', 'endDate'],
    data(){
      return {
        deltaX: 0,
        year: 0,
        month: 0,
        days: [],
        current: [],
        today: format(new Date(), 'YYYY-MM-DD'),
        currentValue: ''
      }
    },
    mounted(){
      this.currentValue = this.convertDate(this.currentValue)
      this.render(null, null)
    },
    watch: {
      value(val){
        this.currentValue = val
      },
      currentValue(val){
        this.$emit('on-change', val)
      }
    },
    methods: {
      onScroll(pos){
      },
      onPan(e){
        this.deltaX = e.deltaX
      },
      onPanEnd(e){
        this.deltaX = 0
      },
      selectDay(i, j){
        if (this.current.length > 0) {
          this.days[this.current[0]][this.current[1]].isCurrent = false
        }
        this.days[i][j].isCurrent = true
        this.current = [i, j]
        this.currentValue = [this.year, zero(this.month + 1), zero(this.days[i][j].day)].join('-')
      },
      convertDate (date) {
        return !date ? this.today : date
      },
      getCurrent (){
        for (let i = 0; i < this.days.length; ++i) {
          for (let j = 0; j < this.days[i].length; ++j) {
            if (this.days[i][j].isCurrent) {
              return [i, j]
            }
          }
        }
        return []
      },
      render (year, month){
        let data = getDays({
          year: year,
          month: month,
          value: this.currentValue,
          rangeBegin: this.convertDate(this.startDate),
          rangeEnd: this.convertDate(this.endDate),
          returnSixRows: this.returnSixRows,
          disablePast: this.disablePast,
          disableFuture: this.disableFuture,
          justCurrentLine: true
        })
        this.days = data.days
        this.year = data.year
        this.month = data.month
        this.current = this.getCurrent(this.days)
      }
    },
    computed: {
      transform(){
        return 'translateX(' + this.deltaX + 'px)'
      }
    },
    components: {
      Scroller
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import (reference)"~assets/less/theme.less";

  @span-size: 26px;
  .calendar {
    table {
      width: 100%;
      td {
        position: relative;
        text-align: center;
        padding: 5px 0;
        vertical-align: middle;
        color: @main-text-color;
        span {
          display: block;
          margin: 0 auto;
          width: @span-size;
          height: @span-size;
          line-height: @span-size;
          border-radius: 50%;
        }
        &.today {
          color: @main-color;
        }
        &.current {
          color: #fff !important;
          span {
            background-color: @main-color;
          }
        }
      }
    }

  }

  .box1 {
    height: 100px;
    position: relative;
    width: 100%;
  }

  .box1-item {
    width: 100%;
    height: 100px;
    display: inline-block;
    float: left;
    text-align: center;
    line-height: 100px;
  }
</style>
