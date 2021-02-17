import firebase from "@react-native-firebase/app"

const firebaseConfig = {
    apiKey: "******",
    authDomain: "******",
    projectId: "******",
    storageBucket: "******",
    messagingSenderId: "******",
    appId: "******",
    measurementId: "******"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   export default firebase
