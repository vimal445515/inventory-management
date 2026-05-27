import{User} from "../../generated/prisma/client"
import { UserRequest } from "./IUserRepository"
export interface IUserService{
    createUser(data:UserRequest):Promise<Pick<User,"id"|"name"|"role"|"email">>;
}