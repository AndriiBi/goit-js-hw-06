const nameInput = document.getElementById('name-input');

nameInput.addEventListener('input', handleInput);
function handleInput() {
  const trimmedString = nameInput.value.trim(); 
  if (trimmedString.value === '') {
    document.getElementById('name-output').textContent = 'Anonymous';
  } else {
    document.getElementById('name-output').textContent = nameInput.value;
  }
};
