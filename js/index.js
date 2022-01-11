const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const userNameKey = "UserName";

function paintGreetings(name) {
    greeting.innerHTML = `Hello, ${name}`;
    greeting.classList.remove(hiddenClass);
}
function onLoginSubmit(e) {
    e.preventDefault();
    const inputValue = loginInput.value;
    localStorage.setItem(userNameKey, inputValue);
    loginForm.classList.add(hiddenClass);
    paintGreetings(inputValue)
}

const savedUserName = localStorage.getItem(userNameKey);
const hiddenClass = "hidden";

if (savedUserName === null) {
    loginForm.classList.remove(hiddenClass);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUserName);
}
//loginButton 클릭시 form이 hidden
//Hello. 인풋결과만 html에 생성