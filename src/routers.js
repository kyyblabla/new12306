import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from 'src/views/Search.vue'
import Order from 'src/views/Order.vue'
import Person from 'src/views/Person.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/Search',
  name: '查票',
  component: Search,
  showMenu: true
}, {
  path: '/Order',
  name: '订单',
  component: Order,
  showMenu: true
}, {
  path: '/Person',
  name: '个人',
  component: Person,
  showMenu: true
}, {
  path: '*',
  redirect: '/Search'
}]

var router = new VueRouter({
  mode: 'history',
  routes,
  // 翻页滚动到上一个位置
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

module.exports = {
  routes,
  router
}
