const backgroundimg = document.querySelector("#backgroundimg");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const rand_0_4 = Math.floor(Math.random() * 7);
const chosenImage = images[rand_0_4];
backgroundimg.style.backgroundImage = `url(./img/${chosenImage})`;