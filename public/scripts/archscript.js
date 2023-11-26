window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.querySelector("header").classList.add("headered");
  } else {
    document.querySelector("header").classList.remove("headered");
  }
});

document.getElementById("showGrid").addEventListener("click", () => {
  document.getElementById("showRow").style.display = "flex";
  document.querySelector(".show-row").style.display = "none";
  document.querySelector(".show-card").style.display = "grid";
  document.getElementById("showGrid").style.display = "none";
});

document.getElementById("showRow").addEventListener("click", () => {
  document.getElementById("showGrid").style.display = "flex";
  document.querySelector(".show-card").style.display = "none";
  document.querySelector(".show-row").style.display = "flex";
  document.getElementById("showRow").style.display = "none";
});