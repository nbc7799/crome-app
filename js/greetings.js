/*
const calculator = {
    add: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    divide: function(a, b){
        return a / b;
    },
    multiply: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    }
}

const addResult = calculator.add(10, 4);
const minusResult = calculator.minus(addResult, 4);
const divideResult = calculator.divide(10, minusResult);
const multiplyResult = calculator.multiply(addResult, divideResult);


const age = 26;

function calculateKrAge(ageOfForeigner){
  return  ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age <18) {
  console.log("You are too young.");
} else if (age>=18 && age<50){
    console.log("You can drink");
} else if (age >50 && age<=80){
    console.log("You should excercise");
} else if (age>80) {
    console.log("You can do whatever you want");
} 


const h1 = document.querySelector(".hello h1");

console.dir(title);

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter );
title.addEventListener("mouseleave", handleMouseLeave );

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


const h1 = document.querySelector("div.hello h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

*/


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}