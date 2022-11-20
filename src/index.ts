import express, {Request, Response} from 'express';
import { router } from './routes';


const server = express();

server.use(express.json());
server.use(router);

server.listen(3000,()=> 
    {console.log("servidor na porta 3000")}
);


