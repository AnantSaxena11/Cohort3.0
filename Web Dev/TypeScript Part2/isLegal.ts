interface User {
    firstname : string,
    lastname : string,
    age : number
}


function isLegal(user : User[]) : User[]
{
    let array : User[] = [];
    for(let i = 0;i<user.length;i++)
    {
        if(user[i].age >=18)
        {
            array.push(user[i]);
        }
    }
    return array;
}

