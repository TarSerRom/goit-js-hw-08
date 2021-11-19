import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';


const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const textArealEl = document.querySelector('textarea');

let formData = {};


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
   
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   
};

populateMessageOutput();

function onFormSubmit(evt) {
    
    evt.preventDefault();
    console.log(formData)
    formData = {};
    evt.currentTarget.reset();


    localStorage.removeItem(STORAGE_KEY);
      
}

function populateMessageOutput() {

    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
        const parsedMessage = JSON.parse(savedMessage);
        formData = parsedMessage;
        emailEl.value = parsedMessage.email;
        textArealEl.value = parsedMessage.message;


    }
}
