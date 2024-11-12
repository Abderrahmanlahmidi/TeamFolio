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




