import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

// import example from './module-example'

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD_HdACMH7cMUjnUhnmml8LQWBrccYtkBs",
  authDomain: "first-job-for-student.firebaseapp.com",
  databaseURL: "https://first-job-for-student.firebaseio.com",
  projectId: "first-job-for-student",
  storageBucket: "first-job-for-student.appspot.com",
  messagingSenderId: "802123355168",
  appId: "1:802123355168:web:3f995cf91fbcfdb4c35845"
};


firebase.initializeApp(firebaseConfig);

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
