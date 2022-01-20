const backgroundimg = document.querySelector("#backgroundimg");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const rand_0_3 = Math.floor(Math.random() * 4);
const chosenImage = images[rand_0_3];
backgroundimg.style.backgroundImage = `url(./img/${chosenImage})`;