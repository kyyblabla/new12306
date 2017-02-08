import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const MENU_CHANGE = 'MENU_CHANGE'

const state = {
  currentMenu: 'search'
}

const getters = {
  currentMenu: state => state.currentMenu
}

const mutations = {
  [MENU_CHANGE](state, menuName) {
    state.menuName = menuName
    console.log(menuName)
  }
}

const actions = {
  menuChange: ({commit}, menuName) => commit(MENU_CHANGE, menuName)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
