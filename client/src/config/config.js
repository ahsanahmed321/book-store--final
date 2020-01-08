import firebase from 'firebase/app';
import 'firebase/auth'




const config = {
    apiKey: "AIzaSyDrkgqrZwzK-It30b1Bt6zupxLC6b3_dlc",
    authDomain: "user-ad4d2.firebaseapp.com",
    databaseURL: "https://user-ad4d2.firebaseio.com",
    projectId: "user-ad4d2",
    storageBucket: "",
    messagingSenderId: "50958123816",
    appId: "1:50958123816:web:03f9f0ce8a563fc906861d"
  };

  const fire = firebase.initializeApp(config);

  export default fire ;