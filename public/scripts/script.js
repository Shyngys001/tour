window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    for (let i of document.getElementsByClassName("header-link")) {
      i.style = "color: var(--black);";
    }
    document.querySelector("header").classList.add("headered");
    document.querySelector(".img-header-logo").classList.add("img-headered-logo");
  } else {
    for (let i of document.getElementsByClassName("header-link")) {
      i.style = "color: var(--white);";
    }
    document.querySelector("header").classList.remove("headered");
    document.querySelector(".img-header-logo").classList.remove("img-headered-logo");
  }
});

for (let i = 0; i < 3; ++i) {
  document.getElementsByClassName("home-carousel")[i].addEventListener("click", () => {
    setTimeout(() => {
      document.getElementById("home").style.background.opacity = "0";
    }, 200);
    setTimeout(() => {
      const compute = window.getComputedStyle(document.getElementsByClassName("home-carousel")[i]);
      const image = compute.getPropertyValue("background-image");
      const path = image.replace('url("', '').replace('")', '');
      document.getElementById("home").style.backgroundImage = `url(${path})`;
    }, 400);
    setTimeout(() => {
      document.getElementById("home").style.background.opacity = "1";
    }, 600);
  });
}

document.querySelector(".btn-left").addEventListener("click", () => {
  document.querySelector(".btn-right").classList.remove("clicked");
  document.querySelector(".btn-left").classList.add("clicked");
});

document.querySelector(".btn-right").addEventListener("click", () => {
  document.querySelector(".btn-left").classList.remove("clicked");
  document.querySelector(".btn-right").classList.add("clicked");
});

document.querySelector(".btn-category-left").addEventListener("click", () => {
  document.querySelector(".btn-category-right").classList.remove("clicked");
  document.querySelector(".btn-category-left").classList.add("clicked");
});

document.querySelector(".btn-category-right").addEventListener("click", () => {
  document.querySelector(".btn-category-left").classList.remove("clicked");
  document.querySelector(".btn-category-right").classList.add("clicked");
});

let replace = 0;
document.querySelector(".btn-home-carousel-r").addEventListener("click", () => {
  replace++;
  if (replace == 3) replace = 0;

  setTimeout(() => {
    document.getElementById("home").style.background.opacity = "0";
  }, 200);
  setTimeout(() => {
    const compute = window.getComputedStyle(document.getElementsByClassName("home-carousel")[replace]);
    const image = compute.getPropertyValue("background-image");
    const path = image.replace('url("', '').replace('")', '');
    document.getElementById("home").style.backgroundImage = `url(${path})`;
  }, 400);
  setTimeout(() => {
    document.getElementById("home").style.background.opacity = "1";
  }, 600);
});

document.querySelector(".btn-home-carousel-l").addEventListener("click", () => {
  replace--;
  if (replace == -1) replace = 2;

  setTimeout(() => {
    document.getElementById("home").style.background.opacity = "0";
  }, 200);
  setTimeout(() => {
    const compute = window.getComputedStyle(document.getElementsByClassName("home-carousel")[replace]);
    const image = compute.getPropertyValue("background-image");
    const path = image.replace('url("', '').replace('")', '');
    document.getElementById("home").style.backgroundImage = `url(${path})`;
  }, 400);
  setTimeout(() => {
    document.getElementById("home").style.background.opacity = "1";
  }, 600);
});

document.querySelector(".btn-category-left").addEventListener("click", () => {
  document.querySelector(".categories").style.transform = "translateX(-770px)";
});

document.querySelector(".btn-category-right").addEventListener("click", () => {
  document.querySelector(".categories").style.transform = "translateX(0px)";
});

function showTour() {
  let tours = document.getElementById("tours");
  let selected = new Array(26).fill(false);

  for (let i = 0; i < 26; ++i) {
    document.getElementsByClassName("category")[i].addEventListener("click", () => {
      selected[i] = !selected[i];
      if (!selected[i]) {
        document.getElementsByClassName("category")[i].classList.remove("categoried");
      } else {
        document.getElementsByClassName("category")[i].classList.add("categoried");
      }

      tours.innerHTML = "";
      if (i % 2 == 0 && i < 10) {
        for (let i = 0; i < 3; ++i) {
          let tour = document.createElement("div");
          tour.classList.add("tour");
          tour.style.backgroundImage = "url('public/images/Altay.svg')";
          tour.style.backgroundSize = "cover";
          tours.append(tour);
        }
      } else if (i % 2 == 0 && i >= 10) {
        for (let i = 0; i < 4; ++i) {
          let tour = document.createElement("div");
          tour.style.backgroundImage = "url('public/images/Shygys.svg')";
          tour.style.backgroundSize = "cover";
          tour.classList.add("tour");
          tours.append(tour);
        }
      } else {
        for (let i = 0; i < 2; ++i) {
          let tour = document.createElement("div");
          tour.style.backgroundImage = "url('public/images/Tarbagatai.svg')";
          tour.style.backgroundSize = "cover";
          tour.classList.add("tour");
          tours.append(tour);
        }
      }
    });
  }

  return tours;
}

showTour();