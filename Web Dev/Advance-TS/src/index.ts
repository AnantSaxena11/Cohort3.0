interface User {
    name : string,
    age : number
}

function sumOfAge(user1 : User,user2 : User) : number
{
    return user1.age + user2.age;
}

const age = sumOfAge({name : "Anant",age :21} , {name : "Ayushi" , age : 23});
console.log(age);