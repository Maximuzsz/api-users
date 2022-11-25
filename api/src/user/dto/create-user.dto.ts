import { IsString, IsEmail,MinLength, MaxLength,Matches,IsNotEmpty  } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User  {
    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    name: string;

    @IsString()
    @IsNotEmpty({message: 'cpf não informado'})
    cpf: string;

    @IsString()
    @IsNotEmpty({message: 'email Não informado'})
    @IsEmail({message: 'email inválid'})
    email: string;

    @IsString()
    @IsNotEmpty({message: 'senha não informada'})
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password inválid',
    })
    password: string;
}
