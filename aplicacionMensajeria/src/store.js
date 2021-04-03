import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// crear un estado que contenga datos
const state = {
  // testing
  currentUser: 'Daniel'
};

// actualizar los datos del estado a través de mutaciones
const mutations = {};


// obtener datos del estado
const getters = {
  currentUser: state => state.currentUser
}

//creando actions para mutations con la necesaria data

const actions = {
  setUser({commit},user){
      commit('SET_USER', user)
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
