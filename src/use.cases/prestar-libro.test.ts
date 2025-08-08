import { describe, it, expect, test } from "vitest";
import{MockedUserLibroRepository,UserLibrosRepository}from"../mocks/libro-user.repository"
import{prestarLibroDependences}from"../use.cases/prestar-libro";
import { Libro } from "../entities/Libro";
describe('¿esta prestado?', () => {

    const _mockedLibroRepository: MockedUserLibroRepository = UserLibrosRepository([],[]);
    
      const _dependencies: Omit<prestarLibroDependences,"LibroPrestado"> = {
        libro: _mockedLibroRepository,
        users:_mockedLibroRepository
      };

      
      
        const libro: Libro = {
          id: "4",
          titulo: "libro4",
          autor: "autor5",
         usuarioId:"wasd"
        };
      test('should ',async () => {
        const estaprestado=await _mockedLibroRepository.LibroPrestado(libro.titulo,"")
   
  expect(estaprestado).toEqual("Email must not be empty");
          

      })
      
   
            });

   

   
    
    

