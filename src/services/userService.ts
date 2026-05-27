import {inject,injectable} from 'tsyringe'
import { UserRepository } from '../repositories/userRepository'
import {User} from "../../generated/prisma/client";
import { IUserService } from '../modles/IUserService';
import { UserRequest } from '../modles/IUserRepository';

@injectable()
export class UserService implements IUserService{
    constructor(private userRepository:UserRepository){}
    async createUser(data: UserRequest): Promise<Pick<User, 'id' | 'name' | 'role' | 'email'>> {
        return this.userRepository.create(data)
    }
}
