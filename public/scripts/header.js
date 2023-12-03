window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.querySelector("header").classList.add("headered");
  } else {
    document.querySelector("header").classList.remove("headered");
  }
});