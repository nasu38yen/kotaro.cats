//import axios from "axios";

export const state = () => ({
    note: null
});
  
export const mutations = {
    setNote(state, note) {
        state.note = note;
    }
};

export const getters = {
    note: state => {
      return state.note;
    }
};

export const actions = {
};
