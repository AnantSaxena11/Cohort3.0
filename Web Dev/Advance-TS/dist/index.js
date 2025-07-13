"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Anant", age: 21 }, { name: "Ayushi", age: 23 });
console.log(age);
