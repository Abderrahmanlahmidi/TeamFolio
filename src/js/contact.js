// let cards = null;
// let temes = null;


//  function teme()
//  {
//     document.getElementById("title-name").innerHTML
//  }



function validation()
{
const form = document.getElementById("form")
const sendbutton = document.getElementById("send")


sendbutton.addEventListener("click",function(){
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
 const name = document.getElementById("name").value 

 const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(name && email && message)
    {
        if(regexmail.test(email))
        {
            alert("YOUR MESSAGE IS SENT!")
            location.reload();
        }
        else
        {
        alert("PLEASE FILL THE FORM CORRECT")
        preventdefault();
        }                           
    }
    else
    {
        alert("please fill the form")
    }
})
}

validation();

function fetch()
{
    const urlfile = "./../src/js/data/data.json"
    fetch(urlfile)
    .then(function(){
      
       if(!response.ok)
       {
        throw new Error("the network not connected!")
       }
       return(response.json)
    })
  .then(function(completedata){
         console.log(completedata)
 })
}
fetch();






function validation()
{
const form = document.getElementById("form")
const sendbutton = document.getElementById("send")


sendbutton.addEventListener("click",function(){
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
 const name = document.getElementById("name").value 

 const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(name && email && message)
    {
        if(regexmail.test(email))
        {
            alert("YOUR MESSAGE IS SENT!")
            location.reload();
        }
        else
        {
        alert("PLEASE FILL THE FORM CORRECT")
        Event.preventDefault();
        }                           
    }
    else
    {
        alert("please fill the form")
    }
})
}

validation();

// fetch("./../../js/data/contact.json")
//   .then(function(response) {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
// //   .then(function(data) {
// //    console.log(data)
// // })
// .then(data =>{
//     // console.log(data)
//     // data.foreach(function(element){
//     //     console.log(element[2])})
// })
//   .catch(function(error) {
//     console.error(error);
//   });
  

//   let cards = null;
//   let temes = null;
  
  
//   function teme()
//    {
//   document.getElementById("title-name").innerHTML
//   }

  async function fe(){
     let res = await fetch("./../../js/data/contact.json");
     let info = await res.json();
  
    // Témoignages
     console.log(info.Témoignages[1].FULLNAME)
     let name0 = info.Témoignages[0].FULLNAME
     let description0 = info.Témoignages[0].DESCRIPTION
     let date0 = info.Témoignages[0].date

     let name1 = info.Témoignages[1].FULLNAME
     let description1 = info.Témoignages[1].DESCRIPTION
     let date1 = info.Témoignages[1].date

     
     let name3 = info.Témoignages[2].FULLNAME
     let description3 = info.Témoignages[2].DESCRIPTION
     let date3 = info.Témoignages[2].date

     let textname1 = document.getElementById("div2")
     let textname0 = document.getElementById("div1")
     let textname3 = document.getElementById("div3")

     textname1.innerHTML = ` 
    <div  id ="div1" class ="second-div h-[245px] w-[400px] flex">
    <h4 id ="title-name" class="title-name">${name0}</h4>
    <p class ="parag">${description0}</p>
    <h4 class ="date">${date0}</h4>
    <button class="rounded-full bg-black text-white	w-[125px] h-[40px]">répondre</button>
  </div>
    `

    textname0.innerHTML = `
    <div id ="div1" class ="first-div h-[245px] w-[400px] flex  ">
    <h4  id = "title-name"class="title-name">${name1}</h4>
    <p class ="parag">${description1}</p>
    <h4 class ="date">${date1}</h4>
    <button id ="btn" class="rounded-full bg-black text-white	w-[125px] h-[40px] btn">répondre</button>

    `

    textname3.innerHTML =  `<div id ="div3" class ="tird-div h-[245px] w-[400px] flex">
    <h4 class="title-name">${name3}</h4>
    <p class ="parag">${description3}</p>
    <h4 class ="date">${date3}</h4>
    <button class="rounded-full bg-black text-white	w-[125px] h-[40px]">répondre</button>`

    console.log(info.horaire[1].name)
  // horaires

  let image0 = info.horaire[0].image
  let nam0 = info.horaire[0].name
  let horaire0 = info.horaire[0].horaire

  let image1 = info.horaire[1].image
  let nam1 = info.horaire[1].name
  let horaire1 = info.horaire[1].horaire

  let image2 = info.horaire[2].image
  let nam2 = info.horaire[2].name
  let horaire2 = info.horaire[2].horaire

  let image3 = info.horaire[3].image
  let nam3 = info.horaire[3].name
  let horaire3 = info.horaire[3].horaire


  let div0 = document.getElementById("ho1")
  let div1 = document.getElementById("ho2")
  let div2 = document.getElementById("ho3")
  let div3 = document.getElementById("ho4")

  div0.innerHTML = `<div id ="ho1" class ="pictures">
    <div class ="first text-center">
      <img class ="w-[300px] h-[300px]" src="${image0}" alt="IMAGE">
      <p class ="full-name">${nam0}</p>
      <p>${horaire0}</p>
    </div> `

    div1.innerHTML = `<div id ="ho2" class ="first text-center">
      <img class ="w-[300px] h-[300px]"" src="${image1}" alt="IMAGE">
      <p class ="full-name">${nam1}</p>
      <p class = "text-center">${horaire1}</p>
    </div> `
    div2.innerHTML =` <div  id ="ho3" class ="first text-center">
      <img  class ="w-[300px] h-[300px] " src="${image2}" alt="IMAGE">
      <p class ="full-name">${nam2}</p>
      <p>${horaire2}</p>
    </div> `

    div3.innerHTML = `<div  id ="ho4" class ="first text-center">
      <img  class ="w-[300px] h-[300px] " src="${image3}" alt="IMAGE">
      <p class ="full-name">${nam3}</p>
      <p>${horaire2}</p>
    </div>`








  }

 


  fe();