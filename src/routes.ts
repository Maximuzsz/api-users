import { Request, Response, Router } from "express";
import {  CreateUserControler } from "./controllers/CreateUserControler";

const router = Router();
const createUserControler = new CreateUserControler();

router.get('/', (request: Request, response: Response) => {
    return response.json({mensagem:"bem vindo a api"})
})


router.post('/users',createUserControler.handle)


export {router}