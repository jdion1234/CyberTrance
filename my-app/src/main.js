import Vue from 'vue'
import './plugins/vuetify'
import * as firebase from 'firebase'
import VueCarousel from 'vue-carousel';

import App from './App.vue'
import router from './router/index.js'
import store from './store'
//import mutations  from './mapMutations'
//import actions from './actions'

import 'animate.css'


Vue.config.productionTip = false
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyAGbARb-xCUuxIyBQjLFGml7EEVHHb89uU',
        authDomain: 'cybertrance-10b2d.firebaseapp.com',
        databaseURL: 'https://cybertrance-10b2d.firebaseio.com',
        projectId: 'cybertrance-10b2d',
        storageBucket: 'cybertrance-10b2d.appspot.com',
        messagingSenderId: '613130160971'
      }
    )
    
    
  }
}).$mount('#app')



// var db = firebase.firestore();
// var docRef = db.collection("designs").doc("camera");
// docRef.get().then(function(doc) {
//   if (doc.exists) {
//       console.log("Document data:", doc.data());
//       console.log("it's workding");
//       this.$store.commit('addshirt',doc.data());
//   } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//   }
// }).catch(function(error) {
//   console.log("Error getting document:", error);
// });