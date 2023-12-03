window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    document.querySelector("header").classList.add("headered");
  } else {
    document.querySelector("header").classList.remove("headered");
  }
});

let bronirovat = document.getElementById("enter");
bronirovat.addEventListener('click', () => {
  orderForm.style.display  = 'block';
})

let form_close = document.getElementById('form_close');
form_close.addEventListener('click', () => {
  orderForm.style.display  = 'none';
})