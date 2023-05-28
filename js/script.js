// бургер
let burger = document.querySelector (".header__burger");
// let menu = document.querySelector (".btn__item");

const bbtn = document.querySelector('#bbtn');
// const bnav = document.querySelector('#bnav');

bbtn.addEventListener('click', function(e) {
  // bnav.classList.toggle('header__burger_nav--active');
  burger.classList.toggle ("header__burger--active");
})