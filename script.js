const nav = document.querySelector(".navbar-nav");
const navTogglebtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-link");
//navbar toggle function
const navToggleFunc = function(){
    nav.classList.toggle('active');
    navTogglebtn.classList.toggle('active');
}
navTogglebtn.addEventListener('click', navToggleFunc);

for (let i=0; i< navLinks.length; i++){
    navLinks(i).addEventListener('click', navToggleFunc);
}



 