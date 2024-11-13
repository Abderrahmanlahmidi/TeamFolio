

async function load   ()  {

     const Response  =  await fetch("http://127.0.0.1:5500/src/js/data/team.json")
     let data =  await Response.json()
     Afficherequipe(data)
     console.log(data)

         

}
load( )


function Afficherequipe(images) {
   
    let html=""
    images.forEach((imageContainer) => {

      html+=` <div class="relative group image-container w-80 h-80  ">
          <img src="${imageContainer.image}" alt="kaoutar" class="w-full h-full object-cover rounded-lg">
    <div class="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <div id="overlay-content-1" class="text-center">
         <h3 class="text-2xl font-bold">${imageContainer.name}</h3>
         <p class="text-lg">${imageContainer.age} ans</p>
         <p class="mt-2">${imageContainer.description}</p>
      </div>
    </div>
  </div>
`
;

});
document.getElementById("main-section").innerHTML =html

}































