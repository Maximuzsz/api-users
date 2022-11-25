import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserPayload } from 'src/auth/models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  //criação do usuário
  async create(createUserDto: CreateUserDto) {

    const data = {
      ...createUserDto,
      // encriptando a senha 
      password: await bcrypt.hash(createUserDto.password, 10),
    }
    try{
      const userCreate = await this.prisma.user.create({data});
      const payload: UserPayload = {
        sub: userCreate.id,
        cpf: userCreate.cpf,
      };
      const jwtToken = this.jwtService.sign(payload);
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
