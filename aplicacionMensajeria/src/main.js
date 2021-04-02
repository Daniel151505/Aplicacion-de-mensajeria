// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase/app';


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBaaKDI5VcW1-k7gI4wrU1bnobCCl0YK-E",
  authDomain: "aplicacion-de-mensajeria-9d804.firebaseapp.com",
  projectId: "aplicacion-de-mensajeria-9d804",
  storageBucket: "aplicacion-de-mensajeria-9d804.appspot.com",
  messagingSenderId: "82177931717",
  appId: "1:82177931717:web:a445164da08aab79a773ac",
  measurementId: "G-XR5B2T56ST"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



