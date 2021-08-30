// Animation for responsive nav bar
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".links .link-style");

hamburger.addEventListener("click", () => {
  links.classList.toggle("open");
});


// // closing the modal

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };



// Page Animations
const sequence = gsap.timeline({ defaults: { ease: "power1.out" } });

sequence.to(".a-text", { y: "0%", duration: 0.5 });
sequence.to(".slider", { y: "-100%", duration: 1.5, delay: 0.8 });

sequence.to(".animation", { y: "-100%", duration: 0.5 }, "-=1");

// flip card functionality
function flip(event) {
  var element = event.currentTarget;
  if (element.className === "flip-card-inner") {
    if (element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(180deg)";
    } else {
      element.style.transform = "rotateY(180deg)";
    }
  }
}
