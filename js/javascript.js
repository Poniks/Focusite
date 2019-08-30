

window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("top-nav").className = "sticky";
  } else {
    document.getElementById("top-nav").className = "";
  }
})

let mobileMenu = document.querySelector('.hamburger');

mobileMenu.addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('opened');
})
