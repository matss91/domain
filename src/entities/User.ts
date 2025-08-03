export type UserRole="admin"|"user"
import{Libro}from"../entities/Libro"
export interface User{
    id:string,
    username:String,
    email:String,
    password:String,
    role:UserRole,
    libros: Libro[]|"";
}