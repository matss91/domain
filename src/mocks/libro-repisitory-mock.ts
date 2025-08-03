import { LibrosRepository } from "../usersRepositories/libro-Repository";
import { Libro } from "../entities/Libro";
export interface MockedLibroRepository extends LibrosRepository {
libros:Libro[]
}

export function mockLibrosRepository(libros:Libro[]=[]):MockedLibroRepository{
return({libros,
    



})
}