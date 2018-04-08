import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDyrnsg5aBBf68mOHGYKxKQeB52idAYat4",
    authDomain: "hackunt2018.firebaseapp.com",
    databaseURL: "https://hackunt2018.firebaseio.com",
    projectId: "hackunt2018",
    storageBucket: "hackunt2018.appspot.com",
    messagingSenderId: "773818273370"
  };

firebase.initializeApp(config);

export default firebase;