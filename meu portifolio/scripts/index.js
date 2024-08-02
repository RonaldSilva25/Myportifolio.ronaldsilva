const navbar = document.querySelector(".navbar")
const mobilenavbar = document.querySelector(".navbar__mobile")
const button = document.querySelector(".burguer")

button.addEventListener('click', function() {
    mobilenavbar.classList.toggle('active')
})