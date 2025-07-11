"use strict";
function Greeting(name) {
    console.log(`Hello ${name}`);
}
Greeting("Anant");
function Sum(a, b) {
    return a + b;
}
console.log(Sum(10, 20));
function age(umer) {
    (umer >= 18) ? console.log(true) : console.log(false);
}
age(19);
age(17);
function function2() {
    console.log("helloWOrld");
}
function first(fn) {
    setTimeout(fn, 1000);
}
first(function2);
