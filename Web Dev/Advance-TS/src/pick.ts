interface User {
    id : string,
    name : string,
    age : number,
    email : string,
    password : string
}

type UpdatedUser = Pick<User,'name' | 'age' | 'password'>
type newUpdate = Partial<UpdatedUser>
function updateUser(updatedprops : UpdatedUser) {
  // hit the database to update the pops    
}