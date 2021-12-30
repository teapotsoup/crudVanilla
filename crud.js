const crudForm = document.querySelector("#crudForm");
const crudInput = crudForm.querySelector("input");
//const crudInput = document.querySelector("#crudForm input");
const crudList = document.querySelector("#crudList");

const arrayKey = "array"
let array = [];
function savingArray() {
    localStorage.setItem("array", JSON.stringify(array))
    //JSON.stringify(array) array의 요소들을 스트링으로 바꿔줌
}

function deleteCrud(e) {
    const li = e.target.parentElement;
    li.remove();

    // Storage.removeItem(li.id);
}


function drawInput(input) {
    const li = document.createElement("li");
    li.id = input.key;
    const span = document.createElement("span");
    const button = document.createElement("button")
    span.innerText = input.text;
    button.innerText = "x";
    button.addEventListener("click", deleteCrud);
    li.appendChild(span);
    li.appendChild(button);
    crudList.appendChild(li);
}


crudForm.addEventListener("submit",
    (e) => {
        e.preventDefault();
        const newInput = crudInput.value;
        crudInput.value = "";
        const newInputObj = {
            text: newInput,
            key: Date.now(),
        };
        array.push(newInputObj);
        drawInput(newInputObj);
        savingArray();
    });

const savedArray = localStorage.getItem(arrayKey);

if (savedArray) {
    const parsedArray = JSON.parse(savedArray);
    array = parsedArray;
    parsedArray.map(drawInput);
}