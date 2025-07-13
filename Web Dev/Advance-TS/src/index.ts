interface Users {
    name : string,
    age : number
}

function sumOfAge(user1 : Users,user2 : Users) : number
{
    return user1.age + user2.age;
}

const age = sumOfAge({name : "Anant",age :21} , {name : "Ayushi" , age : 23});
console.log(age);