import { User } from "../entities/User"
import{Libro}from"../entities/Libro"
import { UserLibrosRepository } from "../usersRepositories/user-libro-repository"
export interface MockedUserLibroRepository extends UserLibrosRepository {
users:User[],
libros:Libro[]
}

export function UserLibrosRepository(users:User[]=[],libros:Libro[]=[]):MockedUserLibroRepository{
return({users,libros,LibroPrestado:async (usuarioId:String,titulo:String):Promise<Boolean>=>{
                const libro = libros.find(libro => libro.titulo==titulo);
                if(libro?.usuarioId==""){
                  return true
                }else{
                  return false
                }
            }})


}