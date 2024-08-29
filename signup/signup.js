import { auth , createUserWithEmailAndPassword } from "../firebase.js";

const signUpBtn = document.getElementById('btn');
const email = document.getElementById('email');
const password = document.getElementById('password'); 

signUpBtn.addEventListener('click' , ()=>{
    alert("your Account Signed up Successfully");
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Signed up" , user);
    // ...
    window.location.href = "../index.html";
  })
 
  .catch((error) => {
    const errorCode = error.code;
    console.log("error" , errorCode);
    const errorMessage = error.message;
    console.log("error" , errorMessage);
    // ..
  });

})