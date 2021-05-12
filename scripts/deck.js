// Animation for responsive nav bar
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".links .link-style");

hamburger.addEventListener("click", () => {
  links.classList.toggle("open");
});

// Tabs
defaultOpen = document.getElementById("defaultTab");
defaultOpen.click();

function openTab(evt, tabName) {
  var i, suite, tabLink;
  
  suite = document.getElementsByClassName("suite");
  for (i=0; i< suite.length; i++) {
      suite[i].style.display = 'none';
  }

  tabLink = document.getElementsByClassName("tabLink");
  for (i=0; i <tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", " ");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}

// Page Animations
const sequence = gsap.timeline({defaults: {ease: "power1.out"} });

sequence.to('.a-text', {y:"0%", duration: 0.5});
sequence.to('.slider', {y:"-100%", duration: 1.5, delay: 0.8});

sequence.to('.animation', {y:"-100%", duration: 0.5}, "-=1");


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
