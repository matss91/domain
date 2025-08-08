import{Libro}from"../entities/Libro"
export interface UserLibrosRepository{
LibroPrestado(usuarioId:String,titulo:String):Promise<Boolean>
}

