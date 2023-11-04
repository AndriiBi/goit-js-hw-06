function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackgroundCOlor = document.body;
const btnChange = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btnChange.addEventListener("click", handleClick);

function handleClick () {
  const randomColor = getRandomHexColor();
  bodyBackgroundCOlor.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = randomColor;
}

