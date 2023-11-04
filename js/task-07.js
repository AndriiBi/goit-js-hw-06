const inputControl = document.getElementById("font-size-control");
const spanControl = document.getElementById("text");

inputControl.addEventListener("input", handleFunction);
function handleFunction() {
    const fontSize = inputControl.value + "px";
    spanControl.style.fontSize = fontSize;
};
console.log(inputControl)