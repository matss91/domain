import {createInvalidError}from"../errors/error"
import { UserRole } from "../entities/User"
import { User } from "../entities/User"
export type UserRegisterModel=Omit<User,"id"|"role">

export  function UserRegister({email,password,username}:UserRegisterModel){
    if(email==""){
       return createInvalidError("Email must be not empty") 
    }

      if(password==""){
       return createInvalidError("password must be not empty") 
    }

     if(username==""){
       return createInvalidError("username must be not empty") 
    }
    

    return createInvalidError("Email alrready in use")
    
}