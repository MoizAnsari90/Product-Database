
import { auth , signInWithEmailAndPassword } from "../firebase.js";


const loginBtn = document.getElementById('lbtn');
const email = document.getElementById('Email');
const password = document.getElementById('Password');

loginBtn.addEventListener('click' , ()=>{
    alert("Wel Come To SYBEXLAB");

    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log("Login completed" , user);
    window.location.href = "../index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log("Error" , errorCode);
    const errorMessage = error.message;
    console.log("Error" , errorMessage);
  });
})