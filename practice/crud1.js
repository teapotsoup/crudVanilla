const crudForm = document.querySelector("#crudForm");
const crudInput = document.querySelector("#crudForm Input");
const crudList = document.querySelector("#crudList");

function saveInLocalStorage() {
    localStorage.setItem("array", JSON.stringify(array));
}

let array = [];

function addCrudList(input) {
    let li = document.createElement("li");
    li.id = input.key;
    let span = document.createElement("span");
    let button = document.createElement("button");
    button.innerText = "x";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", (e) => {
        const li = e.target.parentElement;
        console.log(li.id);
        li.remove();

    });
    span.innerText = input.text;
    crudList.appendChild(li);
}



crudForm.addEventListener("submit",
    (e) => {
        e.preventDefault();
        let newInput = crudInput.value;
        crudInput.value = "";
        const newInputObj = {
            text: newInput,
            key: Date.now(),
        };
        array.push(newInputObj);
        addCrudList(newInputObj);
        saveInLocalStorage();
    })


let savedArray = JSON.parse(localStorage.getItem("array"));

if (savedArray) {
    array = savedArray;
    array.map(addCrudList);
}