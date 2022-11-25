import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDecorator } from './decorators/user-decorators';
import { UserCreateDecorator } from './decorators/user-create-decorator';

@UserDecorator()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UserCreateDecorator()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


}
