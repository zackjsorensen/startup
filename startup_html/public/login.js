function login() {
const nameEl = document.querySelector("#username");
localStorage.setItem("username", nameEl.value);
console.log(nameEl.value);
const passEl = document.querySelector("#password");
localStorage.setItem("password", passEl.value);
}