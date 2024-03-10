const LOCAL_STORAGE_KEY = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', formInputHandler);
feedbackForm.addEventListener('submit', formSubmitHandler);

function formInputHandler(event) {
  event.preventDefault();
  const email = feedbackForm.elements.email.value.trim();
  const textareaMessage = feedbackForm.elements.message.value.trim();
  const data = JSON.stringify({ email, textareaMessage });

  //   console.log({ email, textareaMessage });
  //   console.log(data);

  localStorage.setItem(LOCAL_STORAGE_KEY, data);
}

function formSubmitHandler(event) {
  event.preventDefault();
  const email = event.target.email.value.trim();
  const textareaMessage = event.target.message.value.trim();
  if (email === '' || textareaMessage === '') {
    alert('Please complete all the fields!');
    return;
  }
  console.log({
    email,
    textareaMessage,
  });
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  feedbackForm.reset();
}

const dataFromLSJson = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '';
try {
  const dataFromLS = JSON.parse(dataFromLSJson);
  feedbackForm.elements.email.value = dataFromLS.email;
  feedbackForm.elements.message.value = dataFromLS.textareaMessage;
} catch {
  console.log('No saved data!');
}
