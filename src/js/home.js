const cards = document.querySelectorAll('.card');

console.log(cards);




function changebackground()
{
    cards.forEach((e)=>
    {
        e.addEventListener('mouseover' , ()=>
        {
            e.innerHTML = `
            <div class="kaoutar w-80 card   ">
            dev web 
            full stack </div>
            `
            e.target.style.backgroundcolor = "purple"
        })
     
    
        e.addEventListener('mouseout' , ()=>
            {
                e.innerHTML = `
                <div class="kaoutar w-80 card bg-midnight" ><img src="../assets/kaoutar.jpg" alt="kaoutar"> </div>
                `
            }
    
    
    )
    }
    )




}
changebackground()