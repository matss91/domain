import { MockedLibroRepository,mockLibrosRepository} from "../mocks/libro-repisitory-mock";
import { describe, it, expect, test } from "vitest";
import {UserRegisterDependencies}from"../use.cases/agregar-libro"
import {LibroRegisterModel,AgregarLibro}from"../use.cases/agregar-libro"
import { createInvalidError } from "../errors/error";
describe('', () => {

    const _mockedLibroRepository: MockedLibroRepository = mockLibrosRepository([]);
    
      const _dependencies: UserRegisterDependencies = {
        libros: _mockedLibroRepository
      };
    test('should ',async () => {
      const payload:LibroRegisterModel = {
            titulo:"",
            autor:"dsd",
            usuarioId:""


            
          };
          const result=await AgregarLibro(payload,_dependencies)
          expect(result).toEqual(createInvalidError("Title must not be empty"));
            });

    })
    
    

