import{User}from"../entities/User"


export interface UsersRepository{
findByEmail(email:String):Promise<User|null>,
save(user:User):Promise<void>
}