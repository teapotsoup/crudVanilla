const buttonEdit = document.querySelector("#testing");
const formForInput = document.querySelector("#formForInput");
const inputEdit = document.querySelector("#inputEdit");
inputEdit.style.display = 'none';

buttonEdit.addEventListener("click", (e) => {
    inputEdit.style.display = ((inputEdit.style.display != 'none') ? 'none' : '');
});

formForInput.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("result").innerText = inputEdit.value;
});
