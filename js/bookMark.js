const bookMarkForm = document.querySelector("#bookMark");
const bookMarkInput = bookMark.querySelector("#bookMark input");
const bookMarkList = document.querySelector("#bookMarkList");

const BOOKMARKS_KEY = "bookMarks";

let bookMarks = [];

function saveBookMarks() {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookMarks));
}

function paintBookMark(newBookMark) {
    const li = document.createElement("li");
    li.id = newBookMark.id;
    li.style = "margin-top: 10px;";
    const span = document.createElement("span");
    const icon = document.createElement("img");
    span.style = "font-size: 23px; margin-left: 10px";
    const a = document.createElement("a");
    const button = document.createElement("button");
    button.className += "btn btn-outline-secondary btn-sm";
    button.style = "display: inline; margin-left: 10px";
    button.innerText = "X";
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        li.remove();
        bookMarks = bookMarks.filter(e => e.id !== parseInt(li.id));
        saveBookMarks();
    });
    li.appendChild(icon);
    li.appendChild(span); // li태그안 span태그 넣기
    span.appendChild(a);  // span태그안 li태그 넣기
    icon.id = "favicon";
    icon.onclick = `window.open(${newBookMark.link}, '_blank')`;
    icon.src = `https://s2.googleusercontent.com/s2/favicons?domain_url=${newBookMark.link}`;
    icon.style = `border-radius: 7px; width: 23px; height: 23px;  background-repeat: no-repeat; background-size: cover ;`;
    li.appendChild(button); // li태그안 span태그 넣기
    a.innerText = newBookMark.text; //스트링입니다
    a.style = "color: white;";
    a.setAttribute('href', newBookMark.link);
    a.setAttribute('target', "_blank");

    bookMarkList.appendChild(li);
}

function bookMarkDelete(bookMarks) {
    let i = 0;
    while (i < bookMarks.length) {
        bookMarks[i].id !== li.id;
    }

}


function handlebookMarkSubmit(event) {
    event.preventDefault();
    const newBookMark = bookMarkInput.value;
    const link = prompt("Write your bookmark link");
    bookMarkInput.value = "";
    const newBookMarkObj = {
        text: newBookMark,
        link: link,
        id: Date.now()
    }
    bookMarks.push(newBookMarkObj);
    paintBookMark(newBookMarkObj);
    saveBookMarks();
};

bookMarkForm.addEventListener("submit", handlebookMarkSubmit);

const savedBookMarks = localStorage.getItem(BOOKMARKS_KEY);

if (savedBookMarks !== null) {
    const parsedBookMarks = JSON.parse(savedBookMarks);
    bookMarks = parsedBookMarks;
    parsedBookMarks.forEach((e) => {
        paintBookMark(e);
    });
}