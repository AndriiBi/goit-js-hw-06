const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action = "increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

function updateCounter(action) {
  if (action === 'decrement') {
    counterValue--;
  } else if (action === 'increment') {
    counterValue++;
  }

  valueSpan.textContent = counterValue;
}
decrementButton.addEventListener('click', () => updateCounter('decrement'));
incrementButton.addEventListener('click', () => updateCounter('increment'));