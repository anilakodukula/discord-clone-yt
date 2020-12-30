import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD2VEKqdqzWbFtVcSr-X5CT9U0q1ivk3Fo",
    authDomain: "discord-clone-yt-56b04.firebaseapp.com",
    projectId: "discord-clone-yt-56b04",
    storageBucket: "discord-clone-yt-56b04.appspot.com",
    messagingSenderId: "438095161433",
    appId: "1:438095161433:web:aec7d34dcf704bfe9e2948",
    measurementId: "G-PNXV29EE3Q"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;