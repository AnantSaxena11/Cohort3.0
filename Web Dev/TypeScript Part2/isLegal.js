"use strict";
let user = {
    name: "Anant",
    age: 21,
    address: {
        city: "GNoida",
        country: "India",
        pincode: 132456
    }
};
const isLegal = (user) => {
    return (user.age >= 18);
};
console.log(isLegal(user));
