let flag1 = document.querySelector('.hero__flag-1');
let flag2 = document.querySelector('.hero__flag-2');
let flag3 = document.querySelector('.hero__flag-3');
let flag4 = document.querySelector('.hero__flag-4');
let flag5 = document.querySelector('.hero__flag-5');

setTimeout(() => {
  flag1.classList.add('hero__flag-1-active');
}, 3000);

setTimeout(() => {
  flag2.classList.add('hero__flag-2-active');
}, 3400);

setTimeout(() => {
  flag3.classList.add('hero__flag-3-active');
}, 3800);

setTimeout(() => {
  flag4.classList.add('hero__flag-4-active');
}, 4200);

setTimeout(() => {
  flag5.classList.add('hero__flag-5-active');
}, 4600);

setTimeout(() => {
  document.querySelectorAll('.hero__flag').forEach(flag => {
    flag.classList.add('hero__flag-active');
  })
}, 5500);