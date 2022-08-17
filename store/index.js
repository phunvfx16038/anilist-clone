export const state = () => ({
  isDark: false,
  transparent: false,
});

export const getters = {
  myGetter(state) {
    return state.isDark;
  },
  getTransparent(state) {
    return state.transparent;
  },
};

export const mutations = {
  setIsDark(state, payload) {
    state.isDark = payload;
  },
  setTransparent(state, payload) {
    state.transparent = payload;
  },
};

export const actions = {
  updateIsDark({ commit }, state) {
    commit("setIsDark", state);
  },
  updateTransparent({ commit }, state) {
    commit("setTransparent", state);
  },
};
