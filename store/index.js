export const state = () => ({
    counter: 0,
    userInfo: {}
})
  
export const mutations = {
    increment(state) {
        state.counter++
    },
    add(state, inc) {
        state.counter += inc
    },
    setUserInfo(state, info) {
        state.userInfo = info
    }
}

export const getters = {
    userInfo: state => {
      return state.userInfo;
    }
};

export const actions = {
    inc10({ commit }) {
        commit("add", 10);
    }
};
