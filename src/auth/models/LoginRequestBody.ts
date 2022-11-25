import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString()
  cpf: string;

  @IsString()
  password: string;
}