import firebase from 'firebase'

var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCxT5Ffck3U2cl86fPkv-OpKp6kDUA9x5Y",
    authDomain: "pokeapp-e3e72.firebaseapp.com",
    projectId: "pokeapp-e3e72",
    storageBucket: "pokeapp-e3e72.appspot.com",
    messagingSenderId: "670601443365",
    appId: "1:670601443365:web:833ccf47a538a7b540a7cc"
});

var db = firebaseApp.firestore();

export { db };