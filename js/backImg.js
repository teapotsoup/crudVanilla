const backgroundimg = document.querySelector("#backgroundimg");
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",];

const rand_0_5 = Math.floor(Math.random() * 6);
const chosenImage = images[rand_0_5];
backgroundimg.style.backgroundImage = `url(./img/${chosenImage})`;