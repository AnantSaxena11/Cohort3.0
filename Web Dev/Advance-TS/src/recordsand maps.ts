type Users1 = {
    name : string,
    age :number
}
const users2 = new Map<string,Users1>();

users2.set("a",{name :"Anant",age : 21})
users2.set("b",{name :"Ayushi",age :23})

console.log(users2)