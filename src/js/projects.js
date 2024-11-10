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

      for (let i = 0; i < button_group.length; i++) {
        if (labelButtons[i] === targetButton) {
          button_group[i].classList.add("bg-black", "text-white");
        } else {
          button_group[i].classList.remove("bg-black", "text-white");
        }
      }
    });
  });
};

passing_types_to_buttons(button_group);

const card_head = document.querySelectorAll(".card_head");
const card_paragraph = document.querySelectorAll(".card_paragraph");
const someImage = document.querySelectorAll(".someImage");
const card_projects = document.querySelectorAll(".card");
let projectData = [];

async function fetchProjects() {
  const jsonFileUrl = "/src/js/data/data.json";

  try {
    const response = await fetch(jsonFileUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();

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


const display_overlay = document.getElementById("display_overlay");
const overlay = document.getElementById("overlay");

display_overlay.addEventListener("click", function(){
   overlay.classList.remove("hidden");
})

overlay.addEventListener("click", function(){
   overlay.classList.add("hidden");

})






