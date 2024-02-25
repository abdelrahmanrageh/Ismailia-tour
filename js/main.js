
//scroll to top button
let play = document.getElementById("top");

window.onscroll = function() {
    
    console.log(this.scrollY);
    
    if (this.scrollY >= 745) {

        document.getElementById("top").classList.add("show");
    } 
    else {
        document.getElementById("top").classList.remove("show");
    }
}

const slider = document.querySelector(".slider");
const navLinks = document.querySelectorAll(".slider-nav a");

slider.addEventListener("scroll", function () {

    // Calculate the index of the active slide based on the slider's scroll position.
    const activeSlide = Math.round(slider.scrollLeft / slider.clientWidth);
    
    // Checking if index of slide equals activeSlide
    navLinks.forEach((link, index) => {
        if (index === activeSlide) {
            link.classList.add("active");
        } 
        else {
            link.classList.remove("active");
        }
    });

});

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


//year
let year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

