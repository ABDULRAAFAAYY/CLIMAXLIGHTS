
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase,push,set,ref } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDnLHzbvpm2Vkv_dxQE-Zqn3ZXFl0ciJIc",
    authDomain: "climaxlights.firebaseapp.com",
    projectId: "climaxlights",
    storageBucket: "climaxlights.appspot.com",
    messagingSenderId: "154534166236",
    appId: "1:154534166236:web:087ed91b87aaee73f77e19",
    measurementId: "G-C0LYEFNDSH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const database = getDatabase()

// Reference messages collection
 var messagesRef = firebase.database().ref('messages');
  
 // Listen for form submit
 document.getElementById('contactForm').addEventListener('submit', submitForm);
 
 // Submit form
 function submitForm(e){
   e.preventDefault();
 
   // Get values
   var name = getInputVal('name');
   var company = getInputVal('company');
   var email = getInputVal('email');
   var phone = getInputVal('phone');
   var message = getInputVal('message');
 
   // Save message
   saveMessage(name, company, email, phone, message);
 
   // Show alert
   document.querySelector('.alert').style.display = 'block';
 
   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },3000);
 
   // Clear form
   document.getElementById('contactForm').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveMessage(name, company, email, phone, message){
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
     name: name,
     company:company,
     email:email,
     phone:phone,
     message:message
   });
}