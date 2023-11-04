const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', function () {
  const inputValue = validationInput.value;
  const requiredLength = parseInt(validationInput.dataset.length);

  if (inputValue.length === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
