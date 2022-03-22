const state = {
  deviceWidth: 1920
}
const mutations = {
  SET_DEVICE_WIDTH: (state, width) => {
    state.deviceWidth = width
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
