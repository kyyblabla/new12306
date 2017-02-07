import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from 'src/views/Search.vue'
import Order from 'src/views/Order.vue'
import Person from 'src/views/Person.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/Search',
  name: 'Search',
  component: Search,
  showMenu: true,
  icon: require('assets/icon/search.png'),
  iconActive: require('assets/icon/search_active.png')
}, {
  path: '/Order',
  name: 'Order',
  component: Order,
  showMenu: true,
  icon: require('assets/icon/order.png'),
  iconActive: require('assets/icon/order_active.png')
}, {
  path: '/Person',
  name: 'Person',
  component: Person,
  showMenu: true,
  icon: require('assets/icon/person.png'),
  iconActive: require('assets/icon/person_active.png')
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
