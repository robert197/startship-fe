import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui'
import filters from './filters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ui,
    filters
  }
})

export default store
