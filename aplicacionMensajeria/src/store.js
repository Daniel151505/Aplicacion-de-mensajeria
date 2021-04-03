import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// crear un estado que contenga daxtos
const state = {
  // testing
  currentUser: null
};

// actualizar los datos del estado a través de mutaciones
const mutations = {
  SET_USER(state,user){
    state.currentUser = user;
  }
};


// obtener datos del estado
const getters = {
  currentUser: state => state.currentUser
};

//creando actions para mutations con la necesaria data

const actions = {
  setUser(state,user){
      state.commit('SET_USER', user);
  }
};

// creando vuex store
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store;
