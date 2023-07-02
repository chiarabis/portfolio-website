const hamburgerMenu=document.getElementById("hamburger-menu")
const navMenu=document.querySelector(".nav-menu")

hamburgerMenu.addEventListener("click", ()=>{
    hamburgerMenu.classList.toggle("fa-times")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    hamburgerMenu.classList.remove("fa-times")
    navMenu.classList.remove("active")
}))

//popup language flags
const flagContainer=document.querySelectorAll(".flag-container")
const popOver=document.querySelectorAll(".popOver")

for (let i = 0; i < flagContainer.length; i++) {
    flagContainer[i].addEventListener("click", function() {
        popOver[i].classList.toggle("show");
    });
}

//change background color of div
function changeColor(element) {
    element.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
}
  
function resetColor(element) {
    element.style.backgroundColor = "transparent";
}
  
//portfolio slider projects
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slider-content");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}