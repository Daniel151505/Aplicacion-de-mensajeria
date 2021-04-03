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

// creando vuex store

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

export default store;
