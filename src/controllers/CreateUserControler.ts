import { Request, Response } from "express"
import {CreateUserService} from "../services/CreateUserService"

class CreateUserControler{

    handle(request: Request, response: Response)  {
        const createuserService =  new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;

        if(name.length === 0) return response.status(401).json({mensagem:"informe todos os dados"});

        const user = createuserService.execute({name,email});

        return response.status(201).json({user});
    }
}

export {CreateUserControler}