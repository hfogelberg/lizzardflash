import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './modules/user'
import cards from './modules/cards'

export const store = new Vuex.Store({
  modules: {
    user,
    cards
  }
})
