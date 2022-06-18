import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyDLMSoPubniEudrlU6lPDY9Ob35rXAbrXw",
        authDomain: "voting-app-5c612.firebaseapp.com",
        projectId: "voting-app-5c612",
        storageBucket: "voting-app-5c612.appspot.com",
        messagingSenderId: "721828922051",
        appId: "1:721828922051:web:57c792601c96fc2ae49876"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();