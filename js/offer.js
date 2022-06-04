// Section: offer jart Start

let navLink = document.getElementsByClassName("offer-link");
var tabPan = document.querySelectorAll(".tab-pane");

navLink[0].classList.add("nav-link", "active");
tabPan[0].style.display = "block";

for (let i = 1; i < tabPan.length; i++) {
  tabPan[i].style.display = "none";
}

function onChangeNavLinck(pos) {
  for (let i = 0; i < tabPan.length; i++) {
    if (pos === i) {
      tabPan[i].style.display = "block";
      navLink[pos].classList.add("nav-link", "active");
    } else {
      tabPan[i].style.display = "none";
      navLink[i].classList.remove("active");
    }
  }
}

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    onChangeNavLinck(i);
  });
}
