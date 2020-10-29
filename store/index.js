export const state = () => ({
  test: 123,
})

export const mutations = {
  mutation_test(state, payload) {
    state.test += payload
    // error
    /* setTimeout(() => {
      state.test += payload;
    }, 3000) */
  },
}

export const actions = {
  action_test(context, payload) {
    // context.commit('mutation_test', payload)
    setTimeout(() => {
      context.commit("mutation_test", payload)
    }, 3000)
  },
}

export const getters = {
  get_test(state) {
    // console.log('get!!! : ' + state.test)
    return state.test + 1
  },
}
