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

    const activeSlide = Math.round(slider.scrollLeft / slider.clientWidth);
    // Calculate the index of the active slide based on the slider's scroll position.

    navLinks.forEach((link, index) => {
        if (index === activeSlide) {
            link.classList.add("active");
        } 
        else {
            link.classList.remove("active");
        }
    });
    // Checking if index of slide equals activeSlide

});

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

