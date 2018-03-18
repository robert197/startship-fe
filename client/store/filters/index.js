export const CHECK_GDPR = 'CHECK_GDPR'

const state = {
  gdprChecked: false
}

const mutations = {
  [CHECK_GDPR] (state) {
    state.gdprChecked = true
  }
}

const actions = {
  checkGdpr ({ commit }) {
    console.log(state.gdprChecked)
    commit({ type: CHECK_GDPR })
  }
}

export default {
  state,
  actions,
  mutations
}
