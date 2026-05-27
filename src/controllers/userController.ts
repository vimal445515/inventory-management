import {Request,Response} from "express"
import { container } from "tsyringe"
import { UserService } from "../services/userService"

export class UserController{
    async create(req:Request,res:Response){
    try{
        const userService = container.resolve(UserService);
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }catch(error){
        console.log(error)
        if(error instanceof Error){
            res.status(500).json({type:"error",message:error.message});
        }
    }
}
}

