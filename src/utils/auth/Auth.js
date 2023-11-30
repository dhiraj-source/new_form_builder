export const UserRegistration =( username, password,role,email)=>{
    const users = getUsersFromLocalStorage()

    //checking the exsisting user
    if(users.some((user)=> user.username === username)){
        return {error: ' user Already exsists'}
    }
     //new user Register
     const  newUser = {id: Date.now(), username, email ,password,role};
     users.push(newUser);
     saveUserToLocalstorage(users)
     
} 


const getUsersFromLocalStorage = (user)=>{
   const userData =  localStorage.getItem('users', user)
   return userData
}

const saveUserToLocalstorage = (users)=>{
    localStorage.setItem('users', users)
}

//Login user

export const loginUser = (username, password)=>{
    const users = getUsersFromLocalStorage()
    const user =  users.find((u) =>u.username=== username && u.password === password)
    return user?{user}:{error:'wrong Credintial'}
}