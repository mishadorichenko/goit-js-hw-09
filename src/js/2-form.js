const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const storedFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};

email.value = storedFormData.email;
message.value = storedFormData.message;

form.addEventListener('input', event => {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  saveFormData(formData);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (email.value == '' || message.value == '') {
    return alert('All form fields must be filled in');
  }
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  saveFormData(formData);
  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);
});

function saveFormData(formData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
