const previousSong = document.querySelector("#previousSong");
const nextSong = document.querySelector("#nextSong");
const btnPlay = document.querySelector("#btnPlay");
let audioArr = ["./audio/Cordae_Dream in Color.mp3","./audio/Frank Ocean_In My Room.mp3", "./audio/Frank Ocean_Self Control.mp3", "./audio/joji_EW.mp3"];
// Audio 객체 설정
const myAudio = new Audio();

function placing(controlNum) {
  myAudio.src = audioArr[controlNum];
  songName.innerHTML = audioArr[controlNum];
  const song = audioArr[controlNum].substring(8,);
  const songArr = song.split("_");
  songName.innerHTML = songArr[1].split(".",1);
  singer.innerHTML = songArr[0];
}


let controlNum = 0;
placing(controlNum);
const limit = audioArr.length - 1



// 토글 버튼
let isitplay = false;
function playPause() {
  if (isitplay === false) {
    isitplay = true;
    myAudio.play();
    btnPlay.innerText = "일시정지 버튼";
  } else {
    isitplay = false;
    myAudio.pause();
    btnPlay.innerText = "재생 버튼";
  }
}

function next() {
  controlNum >= limit ? controlNum = 0 : controlNum += 1;
  placing(controlNum);
}

function previous() {
  controlNum <= 0 ? controlNum = limit : controlNum -= 1;
  placing(controlNum);
}

btnPlay.addEventListener("click", playPause);
nextSong.addEventListener("click", next);
previousSong.addEventListener("click", previous);