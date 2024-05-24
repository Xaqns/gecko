const textElement = document.getElementById('text');
const sentences = [
  "gecko",
  "best unblocker",
  "based off caracal-js Incognito"
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
let cursor = true;

function typeWriter() {
  const currentSentence = sentences[sentenceIndex];

  if (!isDeleting && charIndex <= currentSentence.length) {
    textElement.textContent = currentSentence.substring(0, charIndex);
    charIndex++;
  } else {
    isDeleting = true;
    textElement.textContent = currentSentence.substring(0, charIndex);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  let cursorSymbol = cursor ? '_' : '_';
  textElement.textContent += cursorSymbol;

  cursor = !cursor;

  const speed = isDeleting ? 50 : 20;
  const pause = isDeleting ? 100 : 300;

  setTimeout(typeWriter, isDeleting ? speed : pause);
}

typeWriter();
