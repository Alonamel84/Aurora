import throttle from 'lodash.throttle';
const form = document.querySelector('.main-signUp');

const addDataToLS = form.addEventListener(
  'input',
  throttle(e => {
    const { email } = form.elements;
    const importedData = {
      email: email.value,
    };
    localStorage.setItem('main-signUp-email', JSON.stringify(importedData));
  }, 500),
);

const inputData = document.querySelector('input');
const getItems = localStorage.getItem('main-signUp-email');
const parsedForm = JSON.parse(getItems);
function getFn() {
  if (!getItems) {
    return false;
  } else {
    inputData.value = parsedForm.email;
  }
}
getFn();

const button = document.querySelector('.main-signUp-btn');

const submitFn = form.addEventListener('submit', e => {
  e.preventDefault();
  const { email } = e.currentTarget.elements;
  const importedData = { email: email.value };
  if (email.value !== '') {
    localStorage.clear();
    form.reset();
  }
});
