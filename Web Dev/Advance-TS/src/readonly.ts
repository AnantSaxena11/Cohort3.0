type Employee = {
    readonly name : string ,
    readonly age : number
}

const Anant : Readonly<Employee> = {
    name : "Anant",
    age : 23
}


console.log(Anant.name)

//readonly is the menthod to enforce constants on internal values 