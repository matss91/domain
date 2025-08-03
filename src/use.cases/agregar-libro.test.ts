import { MockedLibroRepository,mockLibrosRepository} from "../mocks/libro-repisitory-mock";
import { describe, it, expect, test } from "vitest";
import {UserRegisterDependencies}from"../use.cases/agregar-libro"
import {LibroRegisterModel,AgregarLibro}from"../use.cases/agregar-libro"
import { createInvalidError } from "../errors/error";
import{Libro}from"../entities/Libro"
describe('', () => {

    const _mockedLibroRepository: MockedLibroRepository = mockLibrosRepository([]);
    
      const _dependencies: UserRegisterDependencies = {
        libros: _mockedLibroRepository
      };

       const existingUser: Libro = {
          id: "2",
          titulo: "libro1",
          autor: "autor1",
         usuarioId:""
        };
      
        _mockedLibroRepository.save(existingUser);
    test('nombre de libro vacio ',async () => {
      const payload:LibroRegisterModel = {
            titulo:"",
            autor:"dsd",
            usuarioId:""


            
          };
          const result=await AgregarLibro(payload,_dependencies)
          expect(result).toEqual(createInvalidError("Title must not be empty"));
            });

            test('autor de libro vacio ',async () => {
      const payload:LibroRegisterModel = {
            titulo:"libro1",
            autor:"",
            usuarioId:""


            
          };
          const result=await AgregarLibro(payload,_dependencies)
          expect(result).toEqual(createInvalidError("autor must be not empty"));
            });
            test('autor de libro vacio ',async () => {
      const payload:LibroRegisterModel = {
            titulo:"libro1",
            autor:"dsdff",
            usuarioId:""


            
          };
          const result=await AgregarLibro(payload,_dependencies)
         const resultMocked=await _mockedLibroRepository.findByTitle("libro1")
          expect(result).toEqual(createInvalidError("boock alrready in use"));
            });


    })
    
    

