
var i=1;
async function load   ()  {

     const Response  =  await fetch("/src/js/data/team.json")
     let data =  await Response.json();
     Afficherequipe(data)

         

}
load( )


function Afficherequipe(data) {
 
    let html=""
    data.images.forEach((imageContainer) => {

      html+=` <div class="relative group image-container w-80 h-80  test"  >
          <img  src="${imageContainer.image}" alt="kaoutar" class="w-full h-full object-cover rounded-lg">
    <div class="overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
      <div onclick="test(${imageContainer.name})" id="overlay-content-1" class="text-center">
         <h3 class="text-2xl font-bold">${imageContainer.name}</h3>
         <p class="text-lg">${imageContainer.age} ans</p>
         <p class="mt-2">${imageContainer.description}</p>
      </div>
    </div>
  </div>
`
;


// i++


});

document.getElementById("main-section").innerHTML =html

}


// function test(j){
//   console.log(`${j}` );
  
//   //  location.href(`/src/public/pages/portfolio.html?id ${id}`)
// }































