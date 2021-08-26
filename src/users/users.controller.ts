import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/schemas/users.schema';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user);
  }
}
