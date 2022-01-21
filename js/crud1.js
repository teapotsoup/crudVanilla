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
    buttonDelete.innerText = "DELETE";
    buttonEdit.innerText = "EDIT";
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
        inputEdit.style.backgroundColor="transparent";
        inputEdit.style.color="whitesmoke";
        let content = e.target.parentNode.firstChild.innerText;
        inputEdit.placeholder = content;
    });
    function editInputFunction(event) {
        event.preventDefault();
        if (inputEdit.value === "") {
            alert("빈 항목입니다");
            editInputFunction();
        }
        event.target.parentNode.firstChild.innerText = inputEdit.value;
        const targetKey = parseInt(event.target.parentNode.id);
        function isKey(event) {
            if (parseInt(event.key) === targetKey) {
                event.text = inputEdit.value;
                inputEdit.style.display = 'none'
                saveInLocalStorage();
            }
        }
        array.find(isKey);
    }
    formForInput.addEventListener("submit", editInputFunction
    );
    span.innerText = input.text;
    crudList.appendChild(li);
}

function crudInputFunction(event) {
    event.preventDefault();
    let newInput = crudInput.value;
    if (newInput === "") {
        alert("빈 항목입니다");
        crudInputFunction();
    }
    else {
        crudInput.value = "";
        const newInputObj = {
            text: newInput,
            key: Date.now(),
        };
        array.push(newInputObj);
        addCrudList(newInputObj);
        saveInLocalStorage();
    }
}

crudForm.addEventListener("submit", crudInputFunction);
let savedArray = JSON.parse(localStorage.getItem("array"));
if (savedArray) {
    array = savedArray;
    array.map(addCrudList);
}