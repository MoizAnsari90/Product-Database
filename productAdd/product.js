

import { storage, ref , uploadBytes , db , collection, addDoc , uploadBytesResumable , getDownloadURL } from "../firebase.js";

// console.log(collection, addDoc)

const image = document.getElementById('image');
let getImage;

// export {getImage}


const uploadFile = ()=>{
    const files = image.files[0];
    const imagesRef = ref(storage, files.name);

    const uploadTask = uploadBytesResumable(imagesRef, files);

    uploadTask.on('state_changed', 
      (snapshot) => {
        
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        alert('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        console.log("Handle unsuccessful uploads")
         
      }, 
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {  
              getImage = downloadURL;
          console.log('File available at', downloadURL);
        });
      }
    );



    
}
image.addEventListener('change' , uploadFile);


const title = document.getElementById('title');
const description = document.getElementById('description');
const AddBtn = document.getElementById('add-product-btn');

AddBtn.addEventListener('click' , async ()=>{
  
 
    event.preventDefault();
  
  
    try {
      swal("Good job!", "Your Product successfully Upload", "success")
      const docRef = await addDoc(collection(db, "pakistan"), {
        title: title.value,
        description: description.value,
        Image : getImage
      });
      window.location.href = "../index.html";
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
  


});
  
  


