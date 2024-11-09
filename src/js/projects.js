const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");

hamburgerMenu.addEventListener("click", () => {
   navLinks.classList.toggle("max-lg:block");
})



