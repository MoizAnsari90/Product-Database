



import { collection, getDocs , db , auth , onAuthStateChanged} from "../firebase.js";


const proBtn = document.getElementById('show-Product-btn');

const showPro = document.querySelector('.pak')




proBtn.addEventListener('click', async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "pakistan"));
      querySnapshot.forEach((doc) => {
          const { title, description, Image } = doc.data();

          showPro.innerHTML += `
              <div class="row">
                  <div class="col-md-12">
                      <div class="box mt-4">
                          <div class="card" style="width: 12rem;">
                              <img src="${Image}" class="card-img-top" width:400px; height:300px; alt="${title}" >
                              <div class="card-body" style="height: 5rem;">
                                  <h5 class="card-title">${title}</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">${description}</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;

          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  } catch (error) {
      console.error("Error fetching documents: ", error);
  }
});





// console.log(showPro.innerHTML);

const productBtn = document.getElementById('add-Product-btn');
productBtn.addEventListener('click', ()=>{
   window.location.href = "../productAdd/product.html";
    
});


const logOutBtn = document.getElementById('Log-out-btn');
logOutBtn.addEventListener('click' , ()=>{
    alert("Your Account Log-Out");

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
        } else {
          // User is signed out
         
        }
      });


})







// shiftBtn.addEventListener('click' , ()=>{
//   alert('View Details');
// })
    



// const showProductBtn = document.getElementById('show-Product-btn');
// const element = document.getElementById('show-field'); 
// showProductBtn.addEventListener('click', ()=>{
//     element.style.display = "block";
// });