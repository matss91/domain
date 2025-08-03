import { UsersRepository } from "../usersRepositories/user-Repository";
import { User } from "../entities/User";
export interface MockedUserRepository extends UsersRepository {
users:User[]
}

export function mockUsersRepository(users:User[]=[]):MockedUserRepository{
return({users,
    
    findByEmail:async (email:String):Promise<User|null>=>{const user=users.find(user=>user.email==email)
        


return user?{...user}:null

    },
    save:async (user:User):Promise<void>=>{
            users.push({...user})
        },comparePassword:async(password:String):Promise<Boolean>=>{
            
          const encontrado1 = users.some(persona => persona.password == password);
            return encontrado1
        },
        compareUsername:async(username:String):Promise<Boolean>=>{
           const encontrado2 = users.some(persona => persona.username == username);
            return encontrado2
        }



})
}