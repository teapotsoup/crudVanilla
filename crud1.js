const crudForm = document.querySelector("#crudForm");
const crudInput = document.querySelector("#crudForm Input");
const crudList = document.querySelector("#crudList");

function saveInLocalStorage() {
    localStorage.setItem("array", JSON.stringify(array));
}
let array = [];
function textEdit(e) {
    const li = e.target.parentElement;
}

function addCrudList(input) {
    let li = document.createElement("li");
    li.id = input.key;
    const span = document.createElement("span");
    const buttonDelete = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const formForInput = document.createElement("form");
    const inputEdit = document.createElement("input");
    formForInput.id = "formForInput";
    buttonDelete.innerText = "x";
    buttonEdit.innerText = "E";
    inputEdit.style.display = 'none';
    li.appendChild(span);
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit);
    li.appendChild(formForInput);
    formForInput.appendChild(inputEdit);
    buttonDelete.addEventListener("click", (e) => {
        const li = e.target.parentElement;
        li.remove();
        array = array.filter(a => a.key !== parseInt(li.id));
        saveInLocalStorage()
    });
    buttonEdit.addEventListener("click", (e) => {
        inputEdit.style.display = ((inputEdit.style.display != 'none') ? 'none' : '');
        let content = e.target.parentNode.firstChild.innerText;
        inputEdit.placeholder = content;
    });
    formForInput.addEventListener("submit", (e) => {
        e.preventDefault();
        e.target.parentNode.firstChild.innerText = inputEdit.value;
        const targetKey = parseInt(e.target.parentNode.id);
        function isKey(e) {
            if (parseInt(e.key) === targetKey) {
                e.text = inputEdit.value;
                saveInLocalStorage();
            }
        }
        array.find(isKey);
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