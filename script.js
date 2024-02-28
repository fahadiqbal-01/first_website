let btn = document.querySelector(".email");
let popup = document.querySelector(".popup");
let banner = document.querySelector(".info_banner");
let skill = document.querySelector(".skill");
let skillbtn = document.querySelector(".nav_skillbutton");
let about = document.querySelector(".about");
let about_btn = document.querySelector(".about_btn");
let navlogo = document.querySelector(".navBar-title");
let h_btn = document.querySelector(".home_btn");

btn.addEventListener("click", function () {
  if (popup.style.display == "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
});

skillbtn.addEventListener("click", function () {
  about.style.display = "none";
  banner.style.display = "none";
  skill.style.display = "block";
});

navlogo.addEventListener("click", function () {
  about.style.display = "none";
  skill.style.display = "none";
  banner.style.display = "block";
});

about_btn.addEventListener("click", function () {
  skill.style.display = "none";
  banner.style.display = "none";
  about.style.display = "block";
});

h_btn.addEventListener("click", () => {
  about.style.display = "none";
  skill.style.display = "none";
  banner.style.display = "block";
});
