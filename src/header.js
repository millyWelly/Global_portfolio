// lines in nav-menu
document.querySelectorAll('.header__nav__el').forEach(el => {
  el.addEventListener('mouseover', () => {
    const path = event.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.add('nav__line-active');
  })
  el.addEventListener('mouseout', () => {
    const path = event.currentTarget.dataset.path;
    document.querySelector(`[data-target="${path}"]`).classList.remove('nav__line-active');
  })
})


// burger-menu
let burger = document.querySelector('.header__burger__btn');
burger.addEventListener('click', function (event) {
  burger.classList.toggle('active-3');
  document.querySelector(".header__burger").classList.toggle('header__burger-active');
});