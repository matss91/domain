import { MockedLibroRepository,mockLibrosRepository} from "../mocks/libro-repisitory-mock";
import { describe, it, expect, test } from "vitest";
import {UserRegisterDependencies}from"../use.cases/agregar-libro"
import {LibroRegisterModel,AgregarLibro}from"../use.cases/agregar-libro"
import { createInvalidError } from "../errors/error";
import{Libro}from"../entities/Libro"
import { EliminarLibro } from "./eliminar-libro";
describe('', () => {

    const _mockedLibroRepository: MockedLibroRepository = mockLibrosRepository([]);
    
      const _dependencies: UserRegisterDependencies = {
        libros: _mockedLibroRepository
      };

       const existingUser: Libro = {
          id: "2",
          titulo: "libro12",
          autor: "autor1",
         usuarioId:""
        };
      
        _mockedLibroRepository.save(existingUser);
        const existingUser2: Libro = {
          id: "4",
          titulo: "libro4",
          autor: "autor5",
         usuarioId:""
        };
      
        _mockedLibroRepository.save(existingUser2);
   

            test('libro ',async () => {
      const payload2:LibroRegisterModel = {
            titulo:"libro",
            autor:"dsd",
            usuarioId:""


            
          };
    
 const result=await EliminarLibro(payload2,_dependencies)
          
            expect(result).toEqual(createInvalidError("el libro a eliminar no existe"));
          
            
          

          
         
 
          
 
 

            });

            test('libro ',async () => {
      const payload2:LibroRegisterModel = {
            titulo:"libro4",
            autor:"dsd",
            usuarioId:""


            
          };
    
 const result=await EliminarLibro(payload2,_dependencies)
          
            expect(result).toEqual("libro eliminado con exito");
          
            
          

          
         
 
          
 
 

            });

   

    })
    
    

