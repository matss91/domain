export type UserRole="admin"|"user"

export interface User{
    id:string,
    username:String,
    email:String,
    password:String,
    role:UserRole,
    libros: Libro[]|"";
}