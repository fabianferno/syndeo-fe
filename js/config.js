// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCicX-ShrL9BRxqUS2196yXHYbhkxBQQ1g",
  authDomain: "syndeo-c308d.firebaseapp.com",
  projectId: "syndeo-c308d",
  storageBucket: "syndeo-c308d.appspot.com",
  messagingSenderId: "531101043856",
  appId: "1:531101043856:web:7f73e5f6d1d218b53cdc15",
  measurementId: "G-ML99FQF1Q6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var adminAppUrl = "https://syndeo-admin.herokuapp.com";
var userAppUrl  = "https://syndeo-fe.herokuapp.com/";

// API Routes
// var APIRoute = "https://syndeo-admin.herokuapp.com";
var APIRoute = "https://syndeo-be.herokuapp.com/";


function logout() {
    firebase.auth().signOut().then(() => {
      window.location.href = "index.php";
    }).catch((error) => {
      // An error happened.
    });
}
