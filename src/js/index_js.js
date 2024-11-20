
const kaoutar = document.getElementById("Kaoutar");
fetch('../../js/data/projects.json')
.then(res => res.json())
.then(Json => {
    Json.forEach((item, e) => {
        if( e < 5){
            const row = document.createElement("li")
            row.innerHTML = item.category;
            kaoutar.appendChild(row);
        }else  if(e >= 5 && e < 10){
            const row = document.createElement("li")
            row.innerHTML = item.category;
            abdo.appendChild(row);
        }else  if(e >= 10 && e < 15){
            const row = document.createElement("li")
            row.innerHTML = item.category
            oucouc.appendChild(row)
        }else  if(e >= 15 && e < 20){
            const row = document.createElement("li")
            row.innerHTML = item.category
            yassir.appendChild(row)
        }

    })
})






