
import { auth , sendPasswordResetEmail } from "../firebase.js";

const emailBtn = document.getElementById('v-btn');
const  email = document.getElementById('v-email');


emailBtn.addEventListener('click', ()=>{
    alert('forgot Password');

    sendPasswordResetEmail(auth, email.value)
  .then(() => {
    console.log("Password reset email sent!")
    window.location.href = "../login/login.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log('Error', errorCode)
    const errorMessage = error.message;
    console.log('Error', errorMessage);
    // ..
  });
})