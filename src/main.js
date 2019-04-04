// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from "firebase/app";
// import firestore from 'firebase/firestore'
// Required for side-effects
require("firebase/firestore");


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBnL4r9Snaz7xFW8oEmDsW0SYFIqhAoLF4",
  authDomain: "todo-list-vue-c7652.firebaseapp.com",
  databaseURL: "https://todo-list-vue-c7652.firebaseio.com",
  projectId: "todo-list-vue-c7652",
  storageBucket: "todo-list-vue-c7652.appspot.com",
  messagingSenderId: "353852855109"
};
firebase.initializeApp(config);
var db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true
// })
window.db = db



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
