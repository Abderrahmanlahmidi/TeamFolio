// const cards = document.querySelectorAll('.card');

// console.log(cards);




// function changebackground()
// {
//     cards.forEach((e)=>
//     {
//         e.addEventListener('mouseover' , ()=>
//         {
//             e.innerHTML = `
//             <div class="kaoutar w-80 card" style="background-color: brown;" >
//             dev web 
//             full stack </div>
//             `
//         })
//         e.addEventListener('mouseleave' , ()=>
//             {
//                 e.innerHTML = `
//                 <div class="flex flex-wrap gap-10 justify-evenly">
//               <div class="kaoutar w-80 card" ><img src="../assets/kaoutar.jpg" alt="kaoutar"></div>
//                <div class="lahmidi w-80 card"><img src="../assets/lahmidi.jpg" alt="lahmidi"></div>
//            </div>
//                     <div class="flex flex-wrap gap-10 justify-evenly">
//                         <div class="wassim w-80 card"><img src="../assets/wassim oucouc.jpg" alt="oucouc wassim"></div>
//                         <div class="yassir w-80 card"><img src="../assets/yassir maher.jpg" alt="yassir maher"></div>
//   </div>
//                 `
//             }
//     )
//     }
//     )
// }
// changebackground()



// document.addEventListener("DOMContentLoaded",()=>{

// fetch("/src/js/data/team.json")

// .then(Response=>Response.json())

// .then(Data => Afficherequipe(Data))
// .catch(error => console.error('Erreur de chargement du fichier JSON:', error));

// })

// const  images=document.querySelectorAll(".image-container")

// function Afficherequipe(images){
// images.forEach((imageContainer,index) => {
//     const  overlayContent =document.getElementById(`overlay-content-${index+1}`);
//     overlayContent.innerHTML = `
//       <h3 class="text-2xl font-bold">${imageContainer.name}</h3>
//       <p class="text-lg">${imageContainer.age} ans</p>
//       <p class="mt-2">${imageContainer.description}</p>
//     `;



// });

// }




async function load   ()  {

     const Response  =  await fetch("http://127.0.0.1:5501/src/js/data/team.json")
     let data =  await Response.json()
     Afficherequipe(data)
     console.log(data)

         

}
load( )


function Afficherequipe(images) {
   
    let html=""
    images.forEach((imageContainer) => {

html+=`<div class="relative group image-container w-64 h-64">
<img src="${imageContainer.image}" alt="">
    
    <div class="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <div id="overlay-content-1" class="text-center">`+
      imageContainer.name+
      imageContainer.age+
      imageContainer.description+ 
      `
        
    
      </div>
    </div>
  </div>
  `
;
});
document.getElementById("main-section").innerHTML =html

}

        
        // const overlayContent = document.getElementById(`overlay-content-${index + 1}`);

        // overlayContent.innerHTML = `
        //   <h3 class="text-2xl font-bold">${imageContainer.name}</h3>
        //   <p class="text-lg">${imageContainer.age} ans</p>
        //   <p class="mt-2">${imageContainer.description}</p>
        




   


// fetch('data.json')
  //   .then(response => response.json())
  //   .then(data => {
  //     const images = document.querySelectorAll('.image-container');

  //     images.forEach((imageContainer, index) => {
  //       const overlayContent = document.getElementById(`overlay-content-${index + 1}`);

  //       overlayContent.innerHTML = `
  //         <h3 class="text-2xl font-bold">${imageContainer.name}</h3>
  //         <p class="text-lg">${imageContainer.age} ans</p>
  //         <p class="mt-2">${imageContainer.description}</p>
  //       `;
  //     });
  //   })
  //   .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));

































