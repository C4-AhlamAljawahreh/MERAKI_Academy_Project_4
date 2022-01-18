import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDH2OIKb1CLIHDbBBJvgHxZ8HR54J_NOAM",
    authDomain: "merakigrecory.firebaseapp.com",
    projectId: "merakigrecory",
    storageBucket: "merakigrecory.appspot.com",
    messagingSenderId: "749789580441",
    appId: "1:749789580441:web:ec7859c95b09db04c37c08",
    measurementId: "G-GLNEXH1QFF"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
