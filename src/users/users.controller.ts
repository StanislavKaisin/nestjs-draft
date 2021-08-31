import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/schemas/users.schema';
import { hash } from 'src/utils/encryption';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(user.password);
    const userToDb: CreateUserDto = {
      name: user.name,
      password: hashedPassword,
    };
    try {
      return await this.userService.createUser(userToDb);
    } catch (error) {
      throw new InternalServerErrorException(error.result.errmsg);
    }
  }
}
