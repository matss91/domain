import{User}from"../entities/User"


export interface UsersRepository{
findByEmail(email:String):Promise<User|null>,
save(user:User):Promise<void>,
comparePassword(password:String):Promise<Boolean>,
compareUsername(username:String):Promise<Boolean>
}