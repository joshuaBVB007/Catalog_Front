importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyCUelzJLvuyI-3A8jWHRUWAS8vgugL5hrc",
    authDomain: "yasaibackend.firebaseapp.com",
    databaseURL: "https://yasaibackend-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "yasaibackend",
    storageBucket: "yasaibackend.appspot.com",
    messagingSenderId: "838306389759",
    appId: "1:838306389759:web:ea9799c4bc0fabb885b6ca",
    measurementId: "G-EWXR6F76NK",
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


// messaging.onBackgroundMessage(x=>{
//     console.log("Soy background")
// })