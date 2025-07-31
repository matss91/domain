import { describe,it,expect,test } from "vitest";
import { UserRegister } from "./user-register";
import { UserRole } from "../entities/User";
import{createInvalidError}from"../errors/error"
import{UserRegisterModel}from"../use.cases/user-register"
describe('user-register Use case', () => {
    test('with an email user before ,throw BadRequestError', () => {
      const payload:UserRegisterModel={
        email:"prueba@test.com",
        password:"12345678",
        username:"Test usuario",
        

      }
      const result=UserRegister(payload)
      expect(result).toEqual(createInvalidError("Email alrready in use"))
    })
        test('with an empty email fail whith invalid data', () => {
      const payload:UserRegisterModel={
        email:"",
        password:"12345678",
        username:"Test usuario",
       


      }
      const result=UserRegister(payload)
      expect(result).toEqual(createInvalidError("Email must be not empty"))
    })

    test('with an empty password,fails with InvalidData ', () => {
      const payload:UserRegisterModel={
        email:"prueba@test.com",
        password:"",
        username:"Test usuario",
       


      }
 const result=UserRegister(payload)
       expect(result).toEqual(createInvalidError("password must be not empty"))
    })
      test('with an empty email fail whith invalid data', () => {
      const payload:UserRegisterModel={
        email:"prueba@test.com",
        password:"12345678",
        username:"",
       


      }
      const result=UserRegister(payload)
      expect(result).toEqual(createInvalidError("username must be not empty"))
    })
    
});
