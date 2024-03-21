const typewriter = document.getElementById('typewriter');
const firstText = 'Our world is complex';
const secondText = 'We make it comprehensible';
const typingDelay = 70;
const erasingDelay = 30;
const newTextDelay = 2000;
let charIndex = 0;
let isErasing = false;
let currentText = firstText;

function type() {
  if (!isErasing && charIndex < currentText.length) {
    typewriter.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else if (!isErasing && charIndex === currentText.length) {
    setTimeout(erase, newTextDelay);
  } else if (isErasing && charIndex > 0) {
    typewriter.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else if (isErasing && charIndex === 0) {
    isErasing = false;
    currentText = (currentText === firstText) ? secondText : firstText;
    setTimeout(type, typingDelay);
  }
}

function erase() {
  isErasing = true;
  setTimeout(type, erasingDelay);
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, newTextDelay);
});