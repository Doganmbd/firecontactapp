// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOWxLuhEisBJXOJvv3DZwj9ASJYHeYmvI",
  authDomain: "firebsecontactapp.firebaseapp.com",
  databaseURL: "https://firebsecontactapp-default-rtdb.firebaseio.com",
  projectId: "firebsecontactapp",
  storageBucket: "firebsecontactapp.appspot.com",
  messagingSenderId: "733838050543",
  appId: "1:733838050543:web:b1f7f7c1a82729b5f7c71a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase