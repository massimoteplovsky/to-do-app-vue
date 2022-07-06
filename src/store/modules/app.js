export const app = {
  namespaced: true,
  state: {
    loading: false,
    error: false,
  },
  getters: {
    getAppState: (state) => state,
  },
  mutations: {
    setFetchRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    setSuccessRequest: (state) => {
      state.loading = false;
      state.error = false;
    },
    setFailureRequest: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  actions: {
    fetchDataRequest: ({ commit }) => {
      commit('setFetchRequest');
    },
    fetchDataSuccess: ({ commit }) => {
      commit('setSuccessRequest');
    },
    fetchDataFailure: ({ commit }) => {
      commit('setFailureRequest');
    },
  },
};
