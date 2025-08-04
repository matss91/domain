import{Libro}from"../entities/Libro"
export interface LibrosRepository{
save(libro:Libro):Promise<void>,
findByTitle(title:String):Promise<Boolean|null>,
deletedBook(title:String):Promise<any>,
findByTitle(title:String):Promise<Boolean>
elLibroEstaPrestado(title:String):Promise<Boolean>
}