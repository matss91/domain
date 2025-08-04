import { LibrosRepository } from "../usersRepositories/libro-Repository";
import { Libro } from "../entities/Libro";
export interface MockedLibroRepository extends LibrosRepository {
libros:Libro[]
}

export function mockLibrosRepository(libros:Libro[]=[]):MockedLibroRepository{
return({libros,
    save:async (libro:Libro):Promise<void>=>{
                libros.push({...libro})
            },
            findByTitle:async(titulo:String):Promise<Boolean>=>{
           const encontrado2 = libros.some(libro => libro.titulo == titulo);
            return encontrado2
        },deletedBook:async(titulo:String):Promise<any>=> {
            const result=libros.find(libro=>titulo==libro.titulo)
            if(result==undefined){
                return true
            }else{
 return false
            }
          
      
        }

    



})
}