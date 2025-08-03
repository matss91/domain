import{Libro}from"../entities/Libro"
export interface LibrosRepository{
save(libro:Libro):Promise<void>,
findByTitle(title:String):Promise<Boolean|null>,

}