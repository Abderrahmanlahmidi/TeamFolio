

document.getElementById("btn").addEventListener("click",function(){
    let comment = prompt("enter your reply :")
    let element = `<div class='oucouc'><p>${comment}</p> </d
    iv> ` 
    document.getElementById("data1").innerHTML += element
})