// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyBwMuVi3RM9dj6oJPcMDK1iHGwBw0e36ws",
    authDomain: "elfeshawy-8261e.firebaseapp.com",
    projectId: "elfeshawy-8261e",
    storageBucket: "elfeshawy-8261e.appspot.com",
    messagingSenderId: "46925018378",
    appId: "1:46925018378:web:442d820ca83301d534b6f3",
    measurementId: "G-PN1579VHTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BLZrLZNSJmMNpcElBQVmb5aWMcOOKYhVr3Vy5SwgZ8Bci7XcKSyrfFU6ebP1XveodZO85q1PNQTnlNC2lKwN7W0Jul' }).then((currentToken) => {
    if (currentToken) {
        console.log("32222222222222222")
        console.log(currentToken)
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});