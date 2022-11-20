interface  IUsuario{
    name: string
    email:string
}

class CreateUserService{
    execute({name,email}:IUsuario){
        const data = []; 

        data.push({name,email})
        
        return data;
    }
}

export {CreateUserService}