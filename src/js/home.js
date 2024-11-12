const cards = document.querySelectorAll('.card');

console.log(cards);




function changebackground()
{
    cards.forEach((e)=>
    {
        e.addEventListener('mouseover' , ()=>
        {
            e.innerHTML = `
            <div class="kaoutar w-80 card" style="background-color: brown;" >
            dev web 
            full stack </div>
            `
        })
        e.addEventListener('mouseleave' , ()=>
            {
                e.innerHTML = `
                <div class="flex flex-wrap gap-10 justify-evenly">
              <div class="kaoutar w-80 card" ><img src="../assets/kaoutar.jpg" alt="kaoutar"></div>
               <div class="lahmidi w-80 card"><img src="../assets/lahmidi.jpg" alt="lahmidi"></div>
           </div>
                    <div class="flex flex-wrap gap-10 justify-evenly">
                        <div class="wassim w-80 card"><img src="../assets/wassim oucouc.jpg" alt="oucouc wassim"></div>
                        <div class="yassir w-80 card"><img src="../assets/yassir maher.jpg" alt="yassir maher"></div>
  </div>
                `
            }
    )
    }
    )
}
changebackground()