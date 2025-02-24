
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  
import { getFirestore ,collection, addDoc ,getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAb1OR9xVBPH0NXHLcl1i_EVbk81Z_m0rQ",
    authDomain: "task-applictaion.firebaseapp.com",
    projectId: "task-applictaion",
    storageBucket: "task-applictaion.firebasestorage.app",
    messagingSenderId: "70179675876",
    appId: "1:70179675876:web:bb2c402db2dcd153e996f1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export{app,db,collection, addDoc,getDocs }