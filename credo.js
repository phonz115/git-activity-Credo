function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
}

document.getElementById("colorBtn").addEventListener("click", changeColor);
