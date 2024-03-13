const hamburger  =document.querySelector('#header .navbar .navlist .burger')
const phonemenu  =document.querySelector('#header .navbar .navlist ul')
const header = document.querySelector('.header')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle("active")
    phonemenu.classList.toggle("active")
})