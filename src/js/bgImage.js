const imageChange = document.querySelector('.main-section');
const whiteBg = document.querySelector('.header-block');
const navLink = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.header-logo');
const button = document.querySelector('.main-signUp-btn');
const inputSearch = document.querySelector('.header-search');
const inputData = document.querySelector('input');
const signIn = document.querySelector('header-registr-nav');
document.querySelector('.main-signUp-btn').addEventListener('click', e => {
  e.preventDefault();
  inputSearch.classList.toggle('active');
  imageChange.classList.toggle('active');
  whiteBg.classList.toggle('header-active');
  logo.classList.toggle('active');

  for (const item of navLink) {
    item.classList.toggle('active');
  }
});

navLink.addEventListener('click', e => {
  e.preventDefault();
});
