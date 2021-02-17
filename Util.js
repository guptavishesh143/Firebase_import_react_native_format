import firebase from "@react-native-firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCfWazPNpggBFN9c341KXwstIzi_D-lidM",
    authDomain: "crazyjacks.firebaseapp.com",
    projectId: "crazyjacks",
    storageBucket: "crazyjacks.appspot.com",
    messagingSenderId: "314540893746",
    appId: "1:314540893746:web:c9653e5ea9bfbbf82cfe2b",
    measurementId: "G-CL4L4CPZFZ"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   export default firebase
