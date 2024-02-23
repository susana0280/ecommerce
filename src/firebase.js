import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDX264PWOu2yhdRelahdwbbeo9baiH1a1Y",
    authDomain: "ecommerce-add10.firebaseapp.com",
    projectId: "ecommerce-add10",
    storageBucket: "ecommerce-add10.appspot.com",
    messagingSenderId: "609106066502",
    appId: "1:609106066502:web:383e75e890e5272bbb9e47",
    measurementId: "G-1EEC22G76G"
  };


  
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();

export { auth,provider}