import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector(`.feedback-form`),
//   textarea: document.querySelector(`.feedback-form textarea`),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));



function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('STORAGE_KEY', JSON.stringify(formData));
    // console.log(formData);
};


populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Send forms');
    console.log({ email: refs.form.email.value, message: refs.form.message.value});
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
};


function populateTextarea() {
    const savedInput = JSON.parse(localStorage.getItem('STORAGE_KEY'));
    if (savedInput) {
        refs.form.email.value = savedInput.email;
       refs.form.message.value = savedInput.message;
    }
    // console.log(savedInput);
};
