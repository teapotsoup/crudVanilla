const mp3Case = document.querySelector('#mp3Case');
const playBtn = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton')
// const audioNextBtn = document.querySelector('.js-audioNextBtn');

const MUSIC_COUNT = 3; // 음악 갯수

let currentAudio = 1; // 현재 음악


function playAudio() {
    mp3Case.volume = 0.2;
    mp3Case.loop = true;
    mp3Case.play();  
}

function stopAudio() {
  mp3Case.pause();  
}


function loadAudio() {
  const source = document.querySelector('#audioSource');
  source.src = `audio/${currentAudio}.mp3`;
  mp3Case.load();
  playAudio();
}

function handleNextButtonClick() { 

  if (currentAudio < MUSIC_COUNT) {
    currentAudio += 1;
  } else {
    currentAudio = 1;
  }
  
  mp3Case.pause();
  loadAudio();
}



playBtn.addEventListener('click', loadAudio);
pauseButton.addEventListener('click', stopAudio);
// audioNextBtn.addEventListener('click', handleNextButtonClick);