function playSound(file) {
  const audio = document.getElementById("medAudio");
  audio.src = file;
  audio.play();
}
