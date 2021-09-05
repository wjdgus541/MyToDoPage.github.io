const loginWrapper = document.querySelector(".login__wrapper");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const main = document.querySelector("#main");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector(".logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

let savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    main.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
    loginWrapper.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(savedUsername) {
    greeting.innerText = `${savedUsername}`;
}

function removeGreetings(){
    main.classList.add(HIDDEN_CLASSNAME);
    logOut.classList.add(HIDDEN_CLASSNAME);
    loginWrapper.classList.remove(HIDDEN_CLASSNAME);
}

function onLogoutSubmit(event) {
    localStorage.removeItem(USERNAME_KEY);
    savedUsername = null;
    removeGreetings();
    location.reload();
}

logOut.addEventListener("click", onLogoutSubmit);

if(savedUsername === null) {
    removeGreetings()
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    main.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
    loginWrapper.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}

