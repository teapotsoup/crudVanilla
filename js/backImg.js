const backgroundimg = document.querySelector("#backgroundimg");
console.dir(backgroundimg);
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const rand_0_4 = Math.floor(Math.random() * 5);
const chosenImage = images[rand_0_4];
backgroundimg.style.backgroundImage = `url(./img/${chosenImage})`;