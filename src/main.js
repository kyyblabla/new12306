// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import store from './store'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import {
  router
} from 'src/routers'

FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
