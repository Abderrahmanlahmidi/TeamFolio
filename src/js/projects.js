let hamburgerMenu = document.querySelector(".hamburgerMenu");
let navLinks = document.querySelector(".navLinks");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("max-lg:block");
});

let button_group = document.querySelectorAll(".filter_button");

let passing_types_to_buttons = () => {
  const labelButtons = ["All projects", "recent", "popular"];

  for (let i = 0; i < labelButtons.length; i++) {
    button_group[i].innerHTML = labelButtons[i];
  }

  button_group.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      targetButton = e.target.textContent;
      const buttonContext = targetButton.toLowerCase();

      filterCards(buttonContext);

    });
  });
};

passing_types_to_buttons(button_group);

const card_head = document.querySelectorAll(".card_head");
const card_paragraph = document.querySelectorAll(".card_paragraph");
const someImage = document.querySelectorAll(".someImage");
const card_projects = document.querySelectorAll(".card");
let projectData = [];

console.log(card_head);

async function fetchProjects() {
  const jsonFileUrl = "/src/js/data/data.json";

  try {
    const response = await fetch(jsonFileUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

    fetch_testimonials_data(data);

    projectData = data.cards;

    for (let i = 0; i < projectData.length; i++) {
      card_head[i].innerHTML = projectData[i].title;
      card_paragraph[i].innerHTML = projectData[i].description;
      someImage[i].src = projectData[i].projectDetails.image;
    }
  } catch {
    console.error("Error Fetching data");
  }
}

fetchProjects();

function filterCards(buttonContext) {
  card_projects.forEach((card, index) => {
    const category = projectData[index].category.toLowerCase();

    if (buttonContext === "all projects" || buttonContext === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}



const overlay = document.getElementById("overlay");
const cancer_button = document.getElementById("cancer_button");
const display_overlay = document.getElementById("display_overlay");


display_overlay.addEventListener("click", function(){
  overlay.classList.remove("hidden");
})


cancer_button.addEventListener("click", function(){
   overlay.classList.add("hidden");    
})



const testimonial_paragraph = document.querySelectorAll(".t_paragraph");
const testimonial_image = document.querySelectorAll(".t_image");
const testimonial_name = document.querySelectorAll(".t_name");


const fetch_testimonials_data = (testimonial_data) => {

  for (let i = 0; i < testimonial_data.testimonials.length; i++) {
    
    testimonial_paragraph[i].innerHTML = testimonial_data.testimonials[i].comment;
    testimonial_image[i].src = testimonial_data.testimonials[i].image;
    testimonial_name[i].innerHTML = testimonial_data.testimonials[i].name;

  }

}



const create_form = document.getElementById("create_form");


create_form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const title = document.getElementById("title");
  const category = document.getElementById("category");
  const message = document.getElementById("message");

  console.log(title.value)
  console.log(category.value)
  console.log(message.value)



})





