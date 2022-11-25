import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  //criação do usuário
  async create(createUserDto: CreateUserDto) {

    const data = {
      ...createUserDto,
      // encriptando a senha 
      password: await bcrypt.hash(createUserDto.password, 10),
    }
    try{
      const userCreate = this.prisma.user.create({data});
      return {userCreate, password: undefined}

    }catch(e){
      throw new HttpException(e.response.data.error.details, HttpStatus.BAD_REQUEST);
    }
  }

  async findByCpf(cpf: string){
    try{
      const data  = await this.prisma.user.findUnique({
        where: { cpf },
      });
      return data;
    } catch(e){
      throw new HttpException(e.response.data.error.details, HttpStatus.BAD_REQUEST);
    }
  }


}
