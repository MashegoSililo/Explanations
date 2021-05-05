
// Animation for responsive nav bar
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const allLinks = document.querySelectorAll(".links .link-style");

hamburger.addEventListener("click", () => {
  links.classList.toggle("open");
});

// Instructions Modal
var modal = document.getElementById("openInstructions");

var button = document.getElementById("button");

var closeModal = document.getElementsByClassName("close")[0];

button.onclick = function() {
  modal.style.display = "block";
}

// closing the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// Resources Tabs

function openTab(evt, tabName) {
  var i, resourceContent, tabLink;
  
  resourceContent = document.getElementsByClassName("resourceContent");
  for (i=0; i< resourceContent.length; i++) {
      resourceContent[i].style.display = 'none';
  }

  tabLink = document.getElementsByClassName("tabLink");
  for (i=0; i <tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace("active", " ");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}
