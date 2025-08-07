import { UserLibrosRepository } from "../usersRepositories/user-libro-repository";
import { Libro } from "../entities/Libro";
import { User } from "../entities/User";

export interface MockedUserLibrosRepository extends UserLibrosRepository {
  usersArray: User[];
  librosArray: Libro[];
}

export function mockUserLibrosRepository(
  librosArray: Libro[] = [],
  usersArray: User[] = []
): MockedUserLibrosRepository {
  return {
    usersArray,
    librosArray,

    // Simula si un libro ha sido prestado según el título
    LibroPrestado: async (libroId: string, titulo: string): Promise<Boolean> => {
      const libro = librosArray.find((libro) => libro.titulo === titulo);
      return !!libro;
    },

    // Puedes agregar aquí otras funciones del repositorio si es necesario
  };
}