const text = "Texto a escribir letra por letra.";
const textElement = document.getElementById("text");

let i = 0;
const speed = 30; // Velocidad de escritura en milisegundos

function typeWriter() {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
